"use client" 

import { axiom } from '@/sdks/axiomConfig';
import GenerateProofButton from './GenerateProofButton copy';
import { useState, useEffect } from 'react';

interface GenerateProofProps {
  address: string;
  blockNumbers: number[];
}


export default function GenerateProof(props: GenerateProofProps) {
  const [keccakResponse, setKeccakResponse] = useState('')
  const [queryResponse, setQueryResponse] = useState('')

  useEffect(() => {
    async function generateProof() {
      const { address, blockNumbers } = props;
      
      const qb = await axiom.newQueryBuilder();
      await qb.append({
        blockNumber: blockNumbers[0],
        address: address,
      });
      await qb.append({
        blockNumber: blockNumbers[1],
        address: address,
      });
      const { keccakQueryResponse, query } = await qb.build();
      setKeccakResponse(keccakQueryResponse);
      setQueryResponse(query);
    }
    generateProof();
  }, [[]])


  return (
    <>
      <GenerateProofButton 
        keccakQueryResponse={keccakResponse} 
        query={queryResponse}
        axiomV1QueryAddress={axiom.getAxiomQueryAddress() as string}
        axiomV1QueryAbi={axiom.getAxiomQueryAbi()}
      >
      </GenerateProofButton>
    </>
  )
}