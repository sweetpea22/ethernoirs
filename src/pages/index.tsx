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
import { parseEther } from 'viem';
import { useState } from 'react';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function Home() {
  const { address, isConnected } = useAccount();
  const [amountToMint, setAmountToMint] = useState(6);

  const { config } = usePrepareContractWrite({
    address: charsAddress as `0x${string}`,
    abi: charsAbi.abi,
    functionName: 'mintToMulti',
    args: [address, amountToMint],
    value: parseEther('0.01'),
  });

  const {
    data: mintCharacterData,
    isLoading,
    isSuccess,
    write,
  } = useContractWrite(config);

  const choiceOptions: GameMove[] = [
    { name: 'Accept the tip and spread the rumor.', to: '/4' },
    { name: 'Put some $ on it.', to: '/3' },
  ];
  return (
    <Dashboard>
      <button className='h-12' onClick={() => write?.()}>
        Mint Main Characters
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
