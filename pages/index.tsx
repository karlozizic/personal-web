import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {motion as m} from "framer-motion" 
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import crop from '../public/crop.png'
import Link from "next/link"
import React, {useState} from "react";
import {Transition} from "@headlessui/react"; 

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <m.div className='bg-grey2 font-latoBold'>
      <Head>
        <title>Karlo Zizic</title>
        <link rel="icon" type= "image/png" href="kz-logo.png"/>
      </Head>
      <main id = "main" className="text-center">
        <nav className="mb-12 bg-greenc-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="kz-logo.png"
                    alt=""
                  />
                </div>
                <div className="hidden md:block">
                  <ul className="ml-10 flex items-baseline space-x-4  "> 
                      <Link href = "#home" scroll={false} className = " hover:bg-greenc-700 hover:text-white1 px-3 py-2 rounded-md text-base font-medium">Home</Link>
                      <Link href = "#projects" scroll={false} className = " hover:bg-greenc-700 hover:text-white1 px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                  </ul>

                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-greenc-800 inline-flex items-center justify-center p-2 rounded-md text-greenc-400 hover:text-white hover:bg-greenc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-greenc-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  ):(
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
          {(ref) => (<div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href = "#main">
                  <li className = " hover:bg-greenc-700 hover:text-white1 px-3 py-2 rounded-md text-base font-medium no-bullets list-none">Home</li>
              </a>
              <a href = "#projects">
                  <li className = " hover:bg-greenc-700 hover:text-white1 px-3 py-2 rounded-md text-base font-medium list-none">Projects</li>
              </a>
            </div>
          </div>
          )}
          </Transition>
        </nav>
        
        <div id="home" className='px-10 md:px-20 lg:px-40'>
          <h2 className='text-4xl py-2 text-black2 font-medium md:text-6xl'>Karlo Zizic</h2>
          <h3 className='text-2xl py-2 md:text-3xl text-black2'>Computer engineering student</h3>
          <p className='text-md py-5 leading-8 text-black2 md:text-xl max-w-xl mx-auto'>Hi, I am Software Engineer and Student at FER with passion for writing code. I'm interested in Backend development.</p>
        </div>
        <div className='text-5xl flex justify-center gap-20 py-3 text-white'>
          <a href="https://github.com/karlozizic" ><AiFillGithub/></a>
          <a href="https://www.linkedin.com/in/karlozizic"><AiFillLinkedin /></a>
        </div>
        <div className='relative mx-auto my-auto bg-gradient-to-b from-greenc-400 rounded-t-2xl w-40 h-40 mt-20 md:h-80 md:w-80'>
          <Image src = {crop} alt = "profile picture"/>
        </div>
        
      </main>
      
      <section id = "projects" className='py-10 px-10'>
        <div>
          <h3 className="text-3xl py-1">Projects</h3>
          <p className='text-md py-2 leading-8 text-black2'>Comming soon!
          </p>
          <p></p>
        </div>
        <div>
        </div>
      
      </section>

      <div className='py-10 text-center'>
          <a className="bg-greenc-400 hover:bg-greenc-700 hover:text-white1 rounded inline-flex items-center h-10 py-2 px-2 m-2 font-base" href="Karlo_Zizic.pdf" download="Karlo_Zizic" >
            <svg className="fill-current w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span >Download Resume</span>
          </a>
      </div>

    </m.div>
    


  )
}

export default Home
