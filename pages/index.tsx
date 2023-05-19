import Head from "next/head";
import { Inter } from "next/font/google";
import Genesis from "@/components/genesis";
import Header from "@/components/header";
import Nav from "@/components/nav";
// import { useAppContext } from "@/contexts/appContext";
// import themes from "@/styles/themes";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { mode } = useAppContext();
  // const { bg: primnary } = themes[mode as keyof typeof themes]

  // object literals not available in production build despite full class names:
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  // incorporating via Next.js dark styling toggle rather than via AppContext

  return (
    <>
      <Head>
        <title>Low Time Life</title>
        <meta name="description" content="What is Bitcoin?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${inter.className} bg-white dark:bg-black`}
        style={{ padding: "1.5rem!important" }}
      >
        <Header />
        <Genesis />
      </main>
    </>
  );
}
