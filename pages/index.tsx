import Head from 'next/head'
import { Inter } from 'next/font/google'
import Genesis from './genesis'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <Head>
      <title>Low Time Life</title>
      <meta name="description" content="What is Bitcoin?" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
      <Genesis />
    </main>
  </>
  )
}
