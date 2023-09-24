import { Axiom, AxiomConfig } from "@axiom-crypto/core";

require('dotenv').config()

const config: AxiomConfig = {
  providerUri: process.env.NEXT_PUBLIC_GOERLI_RPC_URL as string,
  version: "v1",
  chainId: 5,
};
export const axiom = new Axiom(config);

export const AXIOM_V1_QUERY_ADDRESS = axiom.getAxiomQueryAddress();
export const AXIOM_V1_QUERY_ABI = axiom.getAxiomQueryAbi();

export const Config = Object.freeze({
  AXIOM_V1_QUERY_MAINNET_ADDR: "0xd617ab7f787adF64C2b5B920c251ea10Cd35a952",
  BEARLIEVER_ADDR: "0x3CbbA4f0cb2B2fF6138370Eff10B8fa252B6a217",
  NONCE_THRESHOLD: 1,
})

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

export const shortenAddress = (address: string) => {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const numberToHex = (num: number) => {
  return `0x${num.toString(16)}`;
}

//@ts-ignore
export const getProof = async (provider: JsonRpcProvider, address: string, blockNumber: number): Promise<any> => {
  const proof = await provider.send("eth_getProof", [address, [], numberToHex(blockNumber)]);
  return proof;
}