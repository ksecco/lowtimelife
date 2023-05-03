import type { AppProps } from "next/app";
import AppContextWrapper from "@/contexts/appContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextWrapper>
      <Component {...pageProps} />
    </AppContextWrapper>
  );
}
