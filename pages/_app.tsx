import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PreLoader from "../components/Loading/PreLoader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PreLoader />
      <Component {...pageProps} />
    </>
  );
}
