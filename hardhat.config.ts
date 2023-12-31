"use client"

import "dotenv/config"
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomicfoundation/hardhat-verify"
import "hardhat-deploy"
import { HardhatUserConfig } from 'hardhat/config';

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL ||
  'https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY';
const PRIVATE_KEY = process.env.PRIVATE_KEY || 'privateKey';
const MANTLE_PRIVATE_KEY = process.env.MANTLE_PRIVATE_KEY || 'privateKey';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: 225000000000,
      chainId: 5,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: [PRIVATE_KEY],
      chainId: 10200,
    
    },
    scroll_sepolia_testnet: {
      url: "https://rpc.ankr.com/scroll_sepolia_testnet",
      gasPrice: 1000000000,
      accounts: [PRIVATE_KEY],
      chainId: 534351,
    },
    mantleTestnet: {
      url: "https://rpc.testnet.mantle.xyz/",
      gasPrice: 1000000000,
      accounts: [MANTLE_PRIVATE_KEY],
      chainId: 5001,
    },
    baseGoerli: {
      url: 'https://base-goerli.public.blastapi.io',
      accounts: [PRIVATE_KEY],
      gasPrice: 225000000000,
       chainId: 84531,
     }
  },
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  //@ts-ignore
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    },
  },

  //@ts-ignore
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
};

export default config;
