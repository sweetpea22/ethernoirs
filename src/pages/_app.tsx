import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import {Newsreader, Inter_Tight } from 'next/font/google'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
// } from '@web3modal/ethereum';
// import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';

import {
  goerli,
  scrollSepolia,
  gnosisChiado,
  mantleTestnet,
  baseGoerli,
} from 'wagmi/chains';

const chains = [goerli, scrollSepolia, gnosisChiado, mantleTestnet, baseGoerli];
const projectId = '254cd962c673dce7b6230a37d69ad80b';

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

// wallet connect v2
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient,
// });
// const ethereumClient = new EthereumClient(wagmiConfig, chains);


// use walletconnect v3
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: 'Web3Modal',
});

createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'dark' });

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

const newsreader = Newsreader({ subsets: ['latin'] });
const inter = Inter_Tight({ subsets: ['latin'] });



export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </WagmiConfig>
  );
}
