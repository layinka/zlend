import { ethers } from "hardhat";

async function main() {
  let TokenMinterFactoryArtifact = await ethers.getContractFactory("TokenMinterFactory");
  // SimpleErc20Artifact = await ethers.getContractFactory("SimpleERC20");
  // StandardTokenArtifact = await ethers.getContractFactory("StandardERC20");

  let tokenMinter = await TokenMinterFactoryArtifact.deploy();
  await tokenMinter.deployed();
  console.log('Using Token Minter Factory Deployed at  ', tokenMinter.address );

   
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
