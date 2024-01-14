import Web3 from 'web3';
import storageFactoryAbi from './StorageFactory.json' assert { type: "json" }; 
import fundMeAbi from './FundMe.json' assert { type: "json" }; 
import rewardAbi from './Reward.json' assert { type: "json" }; 
import dotenv from 'dotenv';
dotenv.config();
function link(){
const ethereumNodeUrl = process.env.ethereumnode;

const web3 = new Web3(new Web3.providers.HttpProvider(ethereumNodeUrl));

const storageFactoryAddress = '0xFaC119A30565d94E4F62680464406DaA1e93c27F';
const fundMeAddress = '0x7AfDD1FE7020d2b3BEf27345e3F909416d8D2Af1';
const rewardAddress = '0x8352DE0654E3CE56D4704C77F6C8f1e5A585B20E';

const storageFactory = new web3.eth.Contract(storageFactoryAbi, storageFactoryAddress);
const fundMe = new web3.eth.Contract(fundMeAbi, fundMeAddress);
const reward = new web3.eth.Contract(rewardAbi, rewardAddress);

const ownerAddress = '0x72934Aa0b55FE6793318088c37E238b458b4C9C7';
const contestant1Address = '0x6b2Ba493083473e8822b54366eabd89F63b6b53e';//abd
const contestant2Address = '0x2914147A1A99BD51b8555b5dEE7329547D1Ca38c';//dhanraj
const contestant3Address = '0xb6cFDf5630956FFD0B519f950fA2Bf4E136522A5';//abd2

const fundingAmount = web3.utils.toWei('1', 'ether');

async function deployFundMeAndFund() {
  try {
    const createFundMeTx = await storageFactory.methods.createFundMeContract(100, 10).send({ from: ownerAddress, value: fundingAmount });
    const fundMeAddress = createFundMeTx.events.FundMeContractCreated.returnValues.fundMeContract;

    console.log('FundMe Contract deployed:', fundMeAddress);

    await fundMe.methods.fund().send({ from: contestant1Address, value: fundingAmount });

    await fundMe.methods.fund().send({ from: contestant2Address, value: fundingAmount });

    await fundMe.methods.fund().send({ from: contestant3Address, value: fundingAmount });

    console.log('Funding completed successfully');
  } catch (error) {
    console.error('Error deploying FundMe and funding:', error);
  }
}

async function deactivateQuizAndDistributeRewards() {
  try {
    await reward.methods.deactivateQuiz().send({ from: ownerAddress });

    console.log('Quiz Deactivated');

    const distributeRewardsTx = await reward.methods
      .distributeRewards(contestant1Address, contestant2Address, contestant3Address)
      .send({ from: ownerAddress });

    console.log('Rewards Distributed. Transaction Hash:', distributeRewardsTx.transactionHash);
  } catch (error) {
    console.error('Error deactivating quiz and distributing rewards:', error);
  }
}


deployFundMeAndFund().then(() => deactivateQuizAndDistributeRewards());
}
export default link;