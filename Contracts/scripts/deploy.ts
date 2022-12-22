// import {HardhatRuntimeEnvironment} from 'hardhat/types';
// import {DeployFunction} from 'hardhat-deploy/types';

// const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   // code here
// };
// export default func;



import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther("1");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log("Lock with 1 ETH deployed to:", lock.address);
  
  
  
  

  
  
  const TokenArtifact = await ethers.getContractFactory("Token");
  
  const hNftTokenArtifact = await ethers.getContractFactory("NFTToken");
  const AppStorageInitArtifact = await ethers.getContractFactory("AppStorageInit");
  const signatoryArtifact = await ethers.getContractFactory("Signatory");
  const tetstatorArtifact = await ethers.getContractFactory("Testator");


  let hNftToken = await hNftTokenArtifact.deploy('HeritageNFT', 'hNFT');
  await hNftToken.deployed();
  console.log('hNftToken Deployed at  ', hNftToken.address );
  

  let hToken = await TokenArtifact.deploy('Heritage', 'hToken');
  await hToken.deployed();
  console.log('Token Deployed at  ', hToken.address );

  let appStorage = await AppStorageInitArtifact.deploy();
  await appStorage.deployed();
  console.log('appStorage Deployed at  ', appStorage.address );

  let signatory = await signatoryArtifact.deploy();
  await signatory.deployed();
  console.log('signatory Deployed at  ', signatory.address );

  let testator = await tetstatorArtifact.deploy();
  await testator.deployed();
  console.log('testator Deployed at  ', testator.address );

  
  const protocolFeeBasePercentage = process.env.PROTOCOL_FEE_BASE_PERCENTAGE || "1";
  const gracePeriod = process.env.GRACE_PERIOD_SECONDS || "3600";
  const expirationThreshold = process.env.EXPIRATION_THRESHOLD_SECONDS || "3600";


  let tx = await appStorage.init(hToken.address, protocolFeeBasePercentage, gracePeriod, expirationThreshold)
  let initStatus = await tx.wait();
  
  console.log('initStatus: ',initStatus);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
