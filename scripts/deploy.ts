import { BaseUri, tokenName, tokenSymbol } from "../deploy-config";
import { developmentChains } from "../deploy-config";
import verify from "../deploy-helpers"
import hre from 'hardhat';

async function main() {

  const { getNamedAccounts, deployments, network } = hre;
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
  waitConfirmations: 6 || 1,
  })
  
  // await mainChars.waitForDeployment();

  console.log(
    `Deployed main chars at ${mainChars.address}!`
  );

   if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(mainChars.address, [])
  }


  // deploy 1155 items to be owned by 6551 TBAs  
  const items = await deploy("Items", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 6,
  })
  console.log(
    `Deployed Items at ${items.address}!`
  );

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(items.address, [])
  }
  
  const logic = await deploy("Logic", {
    from: deployer,
    args: [5],
    log: true,
    waitConfirmations: 6 || 1,
  })

  console.log(
    `Deployed Items at ${logic.address}!`
  );
  
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify("0x8162c80C51b2d756E0b9678F5241d6aa71b64805", [{ numberOfLevels: 5 }])
  }
  
  const superuser = await deploy("Superuser", {
    from: deployer,
    args: [],
    waitConfirmations: 6 || 1,
  })

  console.log(
    `Deployed Items at ${superuser.address}!`
  );
  
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(superuser.address, [])
  }
  
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

