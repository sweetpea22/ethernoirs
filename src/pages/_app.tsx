import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import {Newsreader, Inter_Tight } from 'next/font/google'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { useEffect, useState } from "react";



import {WagmiConfig } from 'wagmi';

import {
  goerli,
  scrollSepolia,
  gnosisChiado,
  mantleTestnet,
  baseGoerli,
} from 'wagmi/chains';

const chains = [goerli, scrollSepolia, gnosisChiado, mantleTestnet, baseGoerli];
const projectId = '254cd962c673dce7b6230a37d69ad80b';


// use walletconnect v3
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: 'Web3Modal',
});

createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'dark' });

const inter = Inter_Tight({ subsets: ['latin'] });



export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
  setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <main className={inter.className}>
        <Component {...pageProps} />
        </main>
        
    </WagmiConfig>
  );
}
