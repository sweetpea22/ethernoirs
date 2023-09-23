import Dashboard from '../components/Dashboard';
import GameInterface from '../components/GameInterface';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import { charsAddress } from '@/contracts';
import charsAbi from '@/contracts/abi.json';
import { parseGwei } from 'viem';
import { useState, useEffect } from 'react';
import { client, exploreChars } from './api/airstack';
import SceneInterface from '@/components/SceneInterface';


export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function Home() {
  // const [NFTs, setNFTs] = useState<any>([]);

  //   useEffect(() => {
  //     fetchNFTs();
  //   }, []);
  //   async function fetchNFTs() {
  //     try {
  //       /* fetch NFTs from Lens API */
  //       let response = await client.query({ query: exploreChars });
  //       /* return NFTs with profile pics  */
  //       let charsData = await Promise.all(
  //         response.data.exploreNFTs.items.filter(async (nftInfo:any) => {
  //           return nftInfo.picture.__typename === 'MediaSet';
  //         })
  //       );

  //       /* update the local state with the NFTs array */
  //       setNFTs(charsData);
  //     } catch (err) {
  //       console.log({ err });
  //     }
  //   }

  const { address, isConnected } = useAccount();
  const newBaseUri = 'ipfs://QmfLFJuamkNtzSC1XYAFUxLiChVEZzXqRXRB295XVWjcNW/';
  const [amountToMint, setAmountToMint] = useState(6);

  const { config } = usePrepareContractWrite({
    address: charsAddress as `0x${string}`,
    abi: charsAbi.abi,
    functionName: 'setBaseURI',
    args: [newBaseUri],
    gas: 1_000_000n,
    gasPrice: parseGwei('70'),
  });

  const {
    data: setUri,
    isLoading,
    isSuccess,
    write,
  } = useContractWrite(config);

  if (isSuccess) {
    console.log('successfully changed tokenuri to jcNW');
  }

  const { data: mintCharTokenUri, isLoading: tokenUriLoading } =
    useContractRead({
      address: charsAddress as `0x${string}`,
      abi: charsAbi.abi,
      functionName: 'tokenURI',
      args: ['1'],
    });

  console.log(mintCharTokenUri);

  const choiceOptions: GameMove[] = [
    { name: 'Accept the tip and spread the rumor.', to: '/4' },
    { name: 'Put some $ on it.', to: '/3' },
  ];

  return (
    <Dashboard>
      <SceneInterface
        description="Zach, the tech lead at Lanny was murdered. But the situation is much worse than it initially seemed. Lanny's CTO hired blackouts to hack his own employees when they threatened to leave the protocol. Now those blackouts continue to blackmail the CTO. So he hires you to solve the murder, but you plan to expose the corruption and clean out the protocol. Your objective: Solve who killed Zach or win by a score of 20."
        href='/42'
      />
    </Dashboard>
  );
}
