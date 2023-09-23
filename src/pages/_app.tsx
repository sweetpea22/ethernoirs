import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { chains, config } from '../wagmi';

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
    // use web3modal from safe's sdk
    //privy or ens?

    //wagmi config giving me grief

    // <WagmiConfig config={config}>
    //   <RainbowKitProvider chains={chains}>
    <main className={pixel1.className}>
      <Component {...pageProps} />
    </main>
    //   </RainbowKitProvider>
    // </WagmiConfig>
  );
}
