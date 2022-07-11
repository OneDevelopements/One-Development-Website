import Head from 'next/head'
import Button from '../components/Button'
import Hero from '../components/Hero'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='gradient-wrapper items-center h-screen w-screen flex justify-center'>
      <motion.div className='h-screen w-screen flex items-center justify-center' initial={{opacity: 0, scale: 0}} transition={{delay: 0.05, duration: 2, type: 'linear'}} animate={{opacity: 1, scale: 1}}>
        <div className='gradient-sky'/>
      </motion.div>
      </div>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.1}}>
      <Hero title='One Development' description='Advancing the Industry' CTAbutton='Join Us' CTAonClick={()=> window.open('https://discord.gg/vg9GACknEU')}/>
      </motion.div>
    </>
  )
}

export default Home
