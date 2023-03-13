'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { getAccount } from '@wagmi/core'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [connected, setConnected] = useState(false)
  const account = getAccount()
  console.log(account)
  return (
    <main className={styles.main}>
     <div className={styles.page}>
     <div>
      <h1>Welcome</h1>
      <p>I'm Full Stack MERN Developer with Web3 specialization</p>
     </div>
    {connected ? 
     <div className={styles.projects}>
      <h4><Link href={'https://plan3alphasite.vercel.app/' } target={'_blank'} rel={'noreferrer noopener'}>Plan3</Link></h4>
      <h4><Link href={'https://www.blkswan.io/'} target={'_blank'} rel={'noreferrer noopener'}>BlackSwan</Link></h4>
      <h4><Link href={'https://www.tally.xyz/gov/plan-3-dao-mumbai'} target={'_blank'} rel={'noreferrer noopener'}>DAO</Link></h4>
     </div>
     :
     <div className={styles.projects}>
      <ConnectButton />
      <h4 style={{color: 'white'}}>Don't have a wallet. <br /> No worries click below ⬇️</h4>
      <button className={styles.noWallet} onClick={() => setConnected(true)}>Wallet free view</button>
     </div>
    }
     </div>
    </main>
  )
}
