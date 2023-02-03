import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from "framer-motion"
import Navbar from '../components/Navbar.js'

function MyApp({ Component, pageProps, router}: AppProps) {
  return (
  <div className="py-10 px-10 lg:px-48 font-latoBold">
    <Navbar />
    <AnimatePresence initial = {false}>
      <Component key = {router.pathname} {...pageProps} />
    </AnimatePresence>
  </div>
  );
}

export default MyApp
