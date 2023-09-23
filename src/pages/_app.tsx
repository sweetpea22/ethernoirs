import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';

import {
  goerli,
  scrollSepolia,
  gnosisChiado,
  mantleTestnet,
} from 'wagmi/chains';

const chains = [goerli, scrollSepolia, gnosisChiado, mantleTestnet];
const projectId = '254cd962c673dce7b6230a37d69ad80b';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const pixel1 = localFont({
  src: [
    {
      path: './fonts/PixelOperatorMono-Bold.ttf',
      weight: '600',
      style: 'bold',
    },
    {
      path: './fonts/PixelOperatorMono.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <main className={pixel1.className}>
        <Component {...pageProps} />
      </main>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
  );
}
