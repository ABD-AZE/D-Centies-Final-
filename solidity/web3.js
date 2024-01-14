import Web3 from 'web3';
import storageFactoryAbi from './StorageFactory.json' assert { type: "json" }; // Replace with your StorageFactory ABI
import fundMeAbi from './FundMe.json' assert { type: "json" }; // Replace with your FundMe ABI
import rewardAbi from './Reward.json' assert { type: "json" }; // Replace with your Reward ABI
import dotenv from 'dotenv';
dotenv.config();
// Replace with your Ethereum node URL
function link(){
const ethereumNodeUrl = process.env.ethereumnode;

const web3 = new Web3(new Web3.providers.HttpProvider(ethereumNodeUrl));

// Replace with your contract addresses
const storageFactoryAddress = '0xFaC119A30565d94E4F62680464406DaA1e93c27F';
const fundMeAddress = '0x7AfDD1FE7020d2b3BEf27345e3F909416d8D2Af1';
const rewardAddress = '0x8352DE0654E3CE56D4704C77F6C8f1e5A585B20E';

const storageFactory = new web3.eth.Contract(storageFactoryAbi, storageFactoryAddress);
const fundMe = new web3.eth.Contract(fundMeAbi, fundMeAddress);
const reward = new web3.eth.Contract(rewardAbi, rewardAddress);

// Example user addresses
const ownerAddress = '0x72934Aa0b55FE6793318088c37E238b458b4C9C7';
const contestant1Address = '0x6b2Ba493083473e8822b54366eabd89F63b6b53e';//abd
const contestant2Address = '0x2914147A1A99BD51b8555b5dEE7329547D1Ca38c';//dhanraj
const contestant3Address = '0xb6cFDf5630956FFD0B519f950fA2Bf4E136522A5';//abd2

// Example funding amount in Ether
const fundingAmount = web3.utils.toWei('1', 'ether');

async function deployFundMeAndFund() {
  try {
    // Step 1: Deploy a new FundMe contract
    const createFundMeTx = await storageFactory.methods.createFundMeContract(100, 10).send({ from: ownerAddress, value: fundingAmount });
    const fundMeAddress = createFundMeTx.events.FundMeContractCreated.returnValues.fundMeContract;

    console.log('FundMe Contract deployed:', fundMeAddress);

    // Step 2: Fund the FundMe contract (Contestant 1)
    await fundMe.methods.fund().send({ from: contestant1Address, value: fundingAmount });

    // Step 3: Fund the FundMe contract (Contestant 2)
    await fundMe.methods.fund().send({ from: contestant2Address, value: fundingAmount });

    // Step 4: Fund the FundMe contract (Contestant 3)
    await fundMe.methods.fund().send({ from: contestant3Address, value: fundingAmount });

    console.log('Funding completed successfully');
  } catch (error) {
    console.error('Error deploying FundMe and funding:', error);
  }
}

async function deactivateQuizAndDistributeRewards() {
  try {
    // Step 5: Deactivate the quiz
    await reward.methods.deactivateQuiz().send({ from: ownerAddress });

    console.log('Quiz Deactivated');

    // Step 6: Distribute rewards
    const distributeRewardsTx = await reward.methods
      .distributeRewards(contestant1Address, contestant2Address, contestant3Address)
      .send({ from: ownerAddress });

    console.log('Rewards Distributed. Transaction Hash:', distributeRewardsTx.transactionHash);
  } catch (error) {
    console.error('Error deactivating quiz and distributing rewards:', error);
  }
}


// Run the script
deployFundMeAndFund().then(() => deactivateQuizAndDistributeRewards());
}
export default link;