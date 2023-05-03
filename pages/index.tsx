import Head from "next/head";
import { Inter } from "next/font/google";
import Genesis from "../components/genesis";
import Header from "../components/header";
import { useAppContext } from "@/contexts/appContext";
import styles from "@/styles/Home.module.css";
import themes from "@/styles/themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { mode } = useAppContext();

  return (
    <>
      <Head>
        <title>Low Time Life</title>
        <meta name="description" content="What is Bitcoin?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${inter.className} bg-${themes[mode as keyof typeof themes].primary}`}
      >
        <Header />
        <Genesis />
      </main>
    </>
  );
}
