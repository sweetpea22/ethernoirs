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
import { parseEther, parseGwei } from 'viem';
import { useState } from 'react';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function Home() {
  const { address, isConnected } = useAccount();
  const newBaseUri = 'ipfs://QmVWpT2f3PyZvuVkH8zQB8ahy6TaDFYBYWQcTUHpMuho3v/';
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

  console.log(setUri);

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
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-100 cursor-pointers'
        onClick={() => write?.()}>
        Set new uri
      </button>
      {/* <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/guy-3.png'
        characterName='Beginning'
        dialogue={
          "You touch down in Kernel City, it's a dump. First you meet the Lanny protocol VC, his name is Max Payne. You lie and tell him that you're investigating a specific address for laundering. He says he's headed to a UFC fight and tosses you a tip to bet on Zach."
        }
      /> */}
    </Dashboard>
  );
}
