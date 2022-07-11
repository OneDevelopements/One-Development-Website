
import { motion } from 'framer-motion'

export default function Card({title, image, bio}){
    return(<motion.div initial={{scale: 0.7, opacity: 0}} animate={{scale: 1, opacity: 1}}>
        <div className='my-6 lg:mx-6 w-[300px] flex flex-col items-center h-[350px] bg-black/30 backdrop-blur-xl transition ease-in-out duration-500 hover:scale-110 rounded-xl p-4 py-6 hover:bg-black/50'>
            <img src={image} className='rounded-full h-[100px] w-[100px]'/>
            <h1 className='text-2xl font-semibold mt-4'>{title}</h1>
            <p className='text-white/70 text-center mt-3'>{bio}</p>
        </div>
    </motion.div>)
}