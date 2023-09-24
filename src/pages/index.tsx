import Dashboard from '../components/Dashboard';
import GameInterface from '../components/GameInterface';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import { charsAddress } from '@/contracts';
import charsAbi from '@/contracts/charAbi.json';
import { parseGwei } from 'viem';
import { useState, useEffect } from 'react';
import { client, exploreChars } from './api/airstack';
import SceneInterface from '@/components/SceneInterface'
  ;


export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function Home() {

  const { address, isConnected } = useAccount();
  const [amountToMint, setAmountToMint] = useState(6);


  return (
    <Dashboard address={address}>
      <SceneInterface
        description="Zach, the tech lead at Lanny Protocol was murdered. But the situation is much worse than it initially seemed. Lanny's CTO Dylan hired blackhats to hack his own employees when they threatened to leave the protocol. Now those blackhats continue to blackmail the CTO. So he hires you to solve the murder, but you plan to expose the corruption so Dylan goes down too. Your objective: Solve who killed Zach or win by a score of 20."
        href='/42'
      />
    </Dashboard>
  );
}
