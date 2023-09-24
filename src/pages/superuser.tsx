import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';
import NonceCheck from '@/components/Superuser/NonceCheck';
import { useAccount } from 'wagmi';
import ConnectWallet from '@/components/Superuser/ConnectWallet';
import { useState, useEffect } from 'react';

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

interface Params {
  slug: string;
}

interface SearchParams {
  [key: string]: string | undefined;
}


export default function SuperUser({searchParams}: PageProps) {
  const { address } = useAccount();
  
  return (
    <>
        {/* <NonceCheck address={address} /> */}
    </>
  );
}
