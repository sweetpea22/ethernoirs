// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
import { ethers } from "ethers";
import { BaseUri, tokenName, tokenSymbol } from "../deploy-config";

async function main() {


  const lock = await hre.ethers.deployContract("MainCharacters", [{
        tokenName,
    tokenSymbol,
    BaseUri,
  }], {
    value: ethers.parseEther("0.005")
  });

  await lock.waitForDeployment();

  console.log(
    `Deployed !`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// import { HardhatRuntimeEnvironment } from "hardhat/types"
// import { DeployFunction } from "hardhat-deploy/types"
// import verify from "../deploy-helpers"
// import { networkConfig, developmentChains } from "../deploy-config"
// import { ethers } from "hardhat"

// const deploy721: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   // @ts-ignore
//   const { getNamedAccounts, deployments, network } = hre
//   const { deploy, log } = deployments
//   const { deployer } = await getNamedAccounts()
//   log("----------------------------------------------------")
//   log("Deploying 721 and waiting for Confirmatoins...")
//   const chars = await deploy("MainCharacters", {
//     from: deployer,
//     args: [],
//     log: true,
//     // we need to wait if on a live network so we can verify properly
//     waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
//   })
//   log(`Characters deployed at ${chars.address}`)
//   if (!developmentChains.includes("goerli") && process.env.ETHERSCAN_API_KEY) {
//     await verify(chars.address, [])
//   }

// }
// export default deploy721;
