
const hre = require("hardhat");
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { BaseUri, tokenName, tokenSymbol } from "../deploy-config";
import { getNamedAccounts } from "hardhat";
import { networkConfig, developmentChains } from "../deploy-config";
import verify from "../deploy-helpers"

async function main() {

  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const charsArgs = [
    tokenName,
    tokenSymbol,
    BaseUri,
  ]


  const mainChars = await deploy("MainCharacters", {
  from: deployer,
  args: charsArgs,
  log: true,
  // we need to wait if on a live network so we can verify properly
  waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  
  // await mainChars.waitForDeployment();

  console.log(
    `Deployed main chars at ${mainChars.address}!`
  );

   if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(mainChars.address, [])
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

