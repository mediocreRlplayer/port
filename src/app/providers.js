'use client';
// importing react / next
import React from 'react';


//web3 imports
import { createClient, configureChains, WagmiConfig } from 'wagmi'
//goerli and eth mainnet comes with defaultChains
import { bsc, polygonMumbai } from 'wagmi/chains'
import {jsonRpcProvider} from '@wagmi/core/providers/jsonRpc'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'






//set up blockchain connections
const { provider, webSocketProvider, chains } = configureChains(
  [polygonMumbai, bsc],
  [
    //alchemy connection priority 0 gives top priority
    jsonRpcProvider({
      priority: 0,
      rpc: (chain) => ({
        http: `https://rpc.ankr.com/bsc`,
      })
    }),
    alchemyProvider({ apiKey: "0sLFPM94rswhQT3_scCwbzaVvzzQlPg7", priority: 1 }),
  ])

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
})

const wagmiClient = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  connectors
})

export default function Providers({ children }) {

  return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme({
          accentColor: '#000',
          accentColorForeground: '#4f4',
          borderRadius: 'none',
        })}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
  );
}