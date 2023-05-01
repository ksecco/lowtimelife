import { Inter } from 'next/font/google'
import Genesis from './genesis'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <Head>
      <title>Low Time Life</title>
      <meta name="description" content="What is Bitcoin?" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Genesis />
  </>
  )
}
