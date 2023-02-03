import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {motion as m} from "framer-motion" 
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import crop from '../public/crop.png'


const Home: NextPage = () => {
  return (
    <m.div 
    initial={{y: "100%"}}
    animate={{y: "0%"}}
    exit = {{opacity: 1}}
    transition = {{duration: 1, ease: "easeOut"}}
    className = "text-white absolute top-0 left-0 w-full h-full bg-grey2 lg:px-48 px-20">
      <Head>
        <title>Karlo Zizic</title>
        <link rel="icon" type= "image/png" href="kz-logo.png"/>
      </Head>
      <main className="my-52 text-center p-10 md:px-20 lg:px-40px">
        <div>
          <h2 className='text-4xl py-2 text-black2 font-medium md:text-6xl'>Karlo Zizic</h2>
          <h3 className='text-2xl py-2 md:text-3xl text-black2'>Computer engineering student</h3>
          <p className='text-md py-5 leading-8 text-black2 md:text-xl max-w-xl mx-auto'>Hi, I am Software Engineer and Student at FER with passion for writing code. I'm interested in Backend development.</p>
        </div>
        <div className='text-5xl flex justify-center gap-20 py-3 text-white'>
          <a href="https://github.com/karlozizic" ><AiFillGithub/></a>
          <a href="https://www.linkedin.com/in/karlozizic"><AiFillLinkedin /></a>
        </div>
        <div className='relative mx-auto my-auto bg-gradient-to-b from-greenc-400 rounded-t-2xl invisible w-40 h-40 mt-20 md:h-80 md:w-80 md:visible'>
          <Image src = {crop} alt = "profile picture"/>
        </div>
      </main>
    </m.div>
  )
}

export default Home
