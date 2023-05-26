// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const PRT = await hre.ethers.getContractFactory("PRT");
  console.log(`Deploying contract with the account: ${PRT.signer.address}`);

  const deplyedPRT = await PRT.deploy();
  console.log(`Contract deployed to ${deplyedPRT.address} on ${hre.network.name}`);

  // await deplyedPear.deployed();
  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await deplyedPRT.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`Verifying contract on Etherscan...`);
  await hre.run(`verify:verify`, {
    address: deplyedPRT.address,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
