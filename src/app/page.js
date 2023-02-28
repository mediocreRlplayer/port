import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.page}>
     <div>
      <h1>Welcome</h1>
      <p>I'm Full Stack MERN Developer with Web3 specialization</p>
     </div>
     <div className={styles.projects}>
      <h4><Link href={'https://plan3alphasite.vercel.app/'}>Plan3</Link></h4>
      <h4><Link href={'https://www.blkswan.io/'}>BlackSwan</Link></h4>
      <h4><Link href={'https://tier-dao.vercel.app/'}>DAO</Link></h4>
      {/* <h4><Link></Link></h4> */}
     </div>
     </div>
    </main>
  )
}
