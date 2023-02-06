import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from "framer-motion"

function MyApp({ Component, pageProps, router}: AppProps) {
  return (
    <Component {...pageProps}/>
  );
}

export default MyApp
