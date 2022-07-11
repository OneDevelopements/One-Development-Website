import Head from 'next/head'
import Button from '../components/Button'
import Hero from '../components/Hero'
import {AnimatePresence, motion} from 'framer-motion'
import Card from '../components/Card'
const Home = () => {
  return (
    <>
    <AnimatePresence>
      <div className='gradient-wrapper items-center h-screen w-screen flex justify-center'>
      <motion.div className='h-screen w-screen flex items-center justify-center' initial={{opacity: 0, scale: 0}} transition={{delay: 0.05, duration: 2, type: 'linear'}} animate={{opacity: 1, scale: 1}} exit={{scale: 0, opacity: 0}}>
        <div className='gradient-violet'/>
      </motion.div>
      </div>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.1}} exit={{opacity: 0}}>
      <Hero title='About Us' description=''/>
      </motion.div>
      <div className='h-screen flex items-center flex-col justify-center'>
        <h1 className='text-4xl font-bold'>How it began</h1>
        <p style={{maxWidth: 'calc(100vw - 100px)'}}  className='text-center text-white/80 mt-4 text-lg'>One Development started in June of 2022, after forming an agreement with the Somelist Development Team, the first projects to be added were: Somelist, Beats, and OneRPC. One Development was Co-Founded by Pop Plays, and KingCh1ll.</p>
      </div>
      <div className='h-screen flex items-center justify-center flex-col'>
        <h1 className='text-4xl font-bold'>Team</h1>
        <div style={{maxWidth: 'calc(100vw - 100px)'}} className='mt-4 flex items-center flex-wrap'>
          <Card image={'https://cdn.discordapp.com/avatars/729975591406796840/ce128e626fb36fa27d6ec053a546076a.webp'} title='Pop Plays#6473' bio={'Nice developer who founded somelist :P Don\'t really know what to do in life tbh. Peace, Fun, and Laughter. Also #React!'}/>
          <Card image='https://cdn.discordapp.com/avatars/571811686617710592/8d6a5f9894aa01b9f9c4cfd43c0ee366.webp' title='KingCh1ll#3616' bio={'Hi, I\'m KingCh1ll [he/him]! I\'m a passionate NodeJS Software Engineer, living in the United States.'}/>
          <Card title=' PixPurple#6306' bio='Hi im Tj Owner and CEO of cursedbots.xyz\n Im a HTML based Software Developer based in the United States' image='https://cdn.discordapp.com/avatars/739926876834889789/c5c73a443ad8d84dcbf7051088ae22f8.webp'/>
        </div>
      </div>
    </AnimatePresence>
    </>
  )
}

export default Home
