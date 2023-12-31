import { 
  Axiom,
  AxiomConfig,
  SolidityAccountResponse,
  SolidityBlockResponse,
  SolidityStorageResponse,
  ValidationWitnessResponse,
} from '@axiom-crypto/core';
import type { QueryBuilder } from '@axiom-crypto/core/query/queryBuilder';
import { ethers } from 'ethers';
import "dotenv/config"
import { parseEther } from 'viem';



const providerUri = process.env.PROVIDER_URI as string;


const config: AxiomConfig = {
    providerUri,
    version: "v1",
    chainId: 5, // Goerli; defaults to 1 (Ethereum Mainnet)
    mock: true, // builds proofs without utilizing actual Prover resources
}

const ax = new Axiom(config);

// check if there 
const BAYC_GOERLI_ADDR = "0xe29f8038d1a3445ab22ad1373c65ec0a6e1161a4";

async function buildQuery() {
  // Build a new query
  const qb = ax.newQueryBuilder();
  // Add queries one by one to the QueryBuilder object
  await qb.append({blockNumber: 9750506});
  await qb.append({blockNumber: 9111528, address: BAYC_GOERLI_ADDR});
  await qb.append({blockNumber: 9111528, address: BAYC_GOERLI_ADDR, slot: 0});
  await qb.append({blockNumber: 9111528, address: BAYC_GOERLI_ADDR, slot: 1});
  return qb;
}

async function submitQuery(qb: QueryBuilder) {
  const { keccakQueryResponse, queryHash, query } = await qb.build();
  console.log("keccakQueryResponse", keccakQueryResponse);
  console.log("queryHash", queryHash);
  console.log("query", query);
  
//@ts-ignore
  const providerUri = process.env.PROVIDER_URI ?? 'http://localhost:8545';
  
const provider = new ethers.JsonRpcProvider(providerUri);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  
const axiomQuery = new ethers.Contract(
    ax.getAxiomQueryAddress() as string, 
    ax.getAxiomQueryAbi(), 
    wallet
);
  
  
  try {
    const txResult = await axiomQuery.sendQuery(
      keccakQueryResponse,
      wallet.address,
      query,
      {
        value: parseEther("0.01"), // Goerli payment value
        gasLimit: "80000"
      }
    );
    const txReceipt = await txResult.wait();
      console.log("sendQuery Receipt", txReceipt);
  } catch (err) {
    console.log(err);
    }
  }
  

async function buildAndSubmitQuery() {
  const qb = await buildQuery();
  await submitQuery(qb);
}

buildAndSubmitQuery();