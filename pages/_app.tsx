import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar.js'
import {AnimatePresence} from "framer-motion"
import Navbar2 from '../components/Navbar2.js'

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
