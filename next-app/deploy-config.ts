export interface networkConfigItem {
  blockConfirmations?: number
}
export interface networkConfigInfo {
  [key: string]: networkConfigItem
}
export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  goerli: {
    blockConfirmations: 6,
  },
  scrollGoerli: { blockConfirmations: 6},
  gnosis: { blockConfirmations: 6 },
}
export const developmentChains = ["hardhat", "localhost"]

// 721 VALUES 
export const tokenName = "Accused Main Characters"

export const tokenSymbol = "ACCU"

export const BaseUri = "ipfs://QmVWpT2f3PyZvuVkH8zQB8ahy6TaDFYBYWQcTUHpMuho3v/"