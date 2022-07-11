import { motion } from 'framer-motion'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress color='#fff'/>
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <Component {...pageProps} />
    </motion.div>
  </>
}

export default MyApp
