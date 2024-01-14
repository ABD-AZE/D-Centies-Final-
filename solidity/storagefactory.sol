// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface AggregatorV3Interface {
    function latestRoundData() external view returns (uint80, int256, uint80, uint80, uint80);
}

library PriceConverter {
    function getPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        return uint256(answer * 10000000000);
    }

    function getConversionRate(uint256 ethAmount) internal view returns (uint256) {
        uint256 ethPrice = getPrice();
        return (ethPrice * ethAmount) / 1000000000000000000;
    }
}

contract StorageFactory {
    address[] public fundMeContracts;
    mapping(address => uint256) public ownersEtherium;
    mapping(address => uint256) public contestantsEtherium;

    event FundMeContractCreated(address indexed fundMeContract);

    function createFundMeContract(uint256 _entryFeeUSD, uint256 _pricePool) external payable {
        FundMe newFundMe = new FundMe{value: msg.value}(_entryFeeUSD, _pricePool, address(this));
        fundMeContracts.push(address(newFundMe));
        emit FundMeContractCreated(address(newFundMe));
    }

    function getPricePool() public view returns (uint256) {
        uint256 totalPool;
        for (uint256 i = 0; i < fundMeContracts.length; i++) {
            totalPool += FundMe(fundMeContracts[i]).pricePool();
        }
        return totalPool;
    }

    function OwnersEtherium() external payable {
        ownersEtherium[msg.sender] += msg.value;
    }

    function contestantEtherium() external payable {
        contestantsEtherium[msg.sender] += msg.value;
    }

    function netPricePool() external view returns (uint256) {
        uint256 totalContestantEtherium = getPricePool();
        uint256 netPool;

        if (ownersEtherium[msg.sender] >= totalContestantEtherium) {
            netPool = ownersEtherium[msg.sender];
        } else {
            netPool = totalContestantEtherium;
        }

        return netPool;
    }
}

contract FundMe {
    address public owner;
    uint256 public pricePool;
    uint256 public entryFeeUSD;
    bool public fundingActive = true;
    StorageFactory public storageFactory;

    event FundingStarted(uint256 entryFeeUSD, uint256 pricePool);
    event FundsReceived(address indexed contributor, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier isActive() {
        require(fundingActive, "Funding is not active");
        _;
    }

    modifier notOwner() {
        require(msg.sender != owner, "Owner cannot fund");
        _;
    }

    constructor(uint256 _entryFeeUSD, uint256 _pricePool, address _storageFactory) payable {
        owner = msg.sender;
        entryFeeUSD = _entryFeeUSD;
        require(_pricePool > 0, "Invalid price pool amount");
        pricePool = _pricePool;
        storageFactory = StorageFactory(_storageFactory);

        require(msg.value == _pricePool, "Incorrect ether sent");
        storageFactory.OwnersEtherium{value: msg.value}();
        emit FundingStarted(entryFeeUSD, pricePool);
    }

    function fund() external payable isActive notOwner {
        uint256 requiredAmount = PriceConverter.getConversionRate(entryFeeUSD);
        require(msg.value >= requiredAmount, "Insufficient funds");
        storageFactory.contestantEtherium{value: msg.value}();
        emit FundsReceived(msg.sender, msg.value);
    }

    function getEntryFee() external view returns (uint256) {
        return PriceConverter.getConversionRate(entryFeeUSD);
    }
}

contract Reward {
    address public owner;
    StorageFactory public storageFactory;
    bool public quizDeactivated = false;

    event RewardsDistributed(
        address indexed firstPlace,
        address indexed secondPlace,
        address indexed thirdPlace,
        uint256 totalRewards
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier quizDeactivatedOnly() {
        require(quizDeactivated, "Quiz is still active");
        _;
    }

    constructor(address _storageFactory) {
        owner = msg.sender;
        storageFactory = StorageFactory(_storageFactory);
    }

    function deactivateQuiz() external onlyOwner {
        quizDeactivated = true;
    }

    function distributeRewards(address firstPlace, address secondPlace, address thirdPlace) external onlyOwner quizDeactivatedOnly {
        require(firstPlace != address(0) && secondPlace != address(0) && thirdPlace != address(0), "Invalid contestant addresses");

        uint256 ownerEtherium = storageFactory.ownersEtherium(owner);
        uint256 totalContestantEtherium = storageFactory.getPricePool() - ownerEtherium;

        if (ownerEtherium > totalContestantEtherium) {
            uint256 ownerReward = (10 * ownerEtherium) / 100;
            uint256 firstPlaceReward = (45 * ownerEtherium) / 100;
            uint256 secondPlaceReward = (30 * ownerEtherium) / 100;
            uint256 thirdPlaceReward = (15 * ownerEtherium) / 100;

            payable(owner).transfer(ownerReward);
            payable(firstPlace).transfer(firstPlaceReward);
            payable(secondPlace).transfer(secondPlaceReward);
            payable(thirdPlace).transfer(thirdPlaceReward);

            emit RewardsDistributed(firstPlace, secondPlace, thirdPlace, ownerReward + firstPlaceReward + secondPlaceReward + thirdPlaceReward);
        } else {
            uint256 ownerReward = (10 * totalContestantEtherium) / 100;
            uint256 firstPlaceReward = (45 * totalContestantEtherium) / 100;
            uint256 secondPlaceReward = (30 * totalContestantEtherium) / 100;
            uint256 thirdPlaceReward = (15 * totalContestantEtherium) / 100;

            payable(owner).transfer(ownerReward);
            payable(firstPlace).transfer(firstPlaceReward);
            payable(secondPlace).transfer(secondPlaceReward);
            payable(thirdPlace).transfer(thirdPlaceReward);

            emit RewardsDistributed(firstPlace, secondPlace, thirdPlace, ownerReward + firstPlaceReward + secondPlaceReward + thirdPlaceReward);
        }
    }
}