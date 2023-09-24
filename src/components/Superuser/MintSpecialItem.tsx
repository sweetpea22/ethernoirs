"use client" 

import { axiom } from "@/sdks/axiomConfig";
import { Axiom, SolidityAccountResponse, SolidityBlockResponse, SolidityStorageResponse, ValidationWitnessResponse } from "@axiom-crypto/core";
import MintSpecialItemButton from './MintSpecialItemButton';

interface MintSpecialItemProps {
  address: string;
  keccakQueryResponse: string;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function MintSpecialItem(props: MintSpecialItemProps) {
  const { address, keccakQueryResponse } = props;

  const responseTree = await axiom.query.getResponseTreeForKeccakQueryResponse(keccakQueryResponse);
  const keccakBlockResponse = responseTree.blockTree.getHexRoot();
  const keccakAccountResponse = responseTree.accountTree.getHexRoot();
  const keccakStorageResponse = responseTree.storageTree.getHexRoot();

  const responses = {
    keccakBlockResponse,
    keccakAccountResponse,
    keccakStorageResponse,
    blockResponses: [] as SolidityBlockResponse[],
    accountResponses: [] as SolidityAccountResponse[],
    storageResponses: [] as SolidityStorageResponse[],
  };
  const witness0: ValidationWitnessResponse | undefined = axiom.query.getValidationWitness(
    responseTree,
    6120000,
    address,
  );
  
  const witness1: ValidationWitnessResponse | undefined = axiom.query.getValidationWitness(
    responseTree,
    10430000,
    address,
  );
  if (!witness0 || !witness1) {
    // You'll likely want to fail gracefully here instead of throwing.
    throw new Error("Witnesses not found");
  }
  responses.accountResponses.push(witness0.accountResponse as SolidityAccountResponse);
  responses.accountResponses.push(witness1.accountResponse as SolidityAccountResponse);

  return (
    <div>
    {/* <MintSpecialItemButton responses={responses} /> */}
    </div>
  )
}