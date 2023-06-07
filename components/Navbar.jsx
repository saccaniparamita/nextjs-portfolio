import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import React, { useState } from 'react'
import { AiOutlineClose, AiFillGithub } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { useRouter } from 'next/router';



const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className='fixed w-full h-20 z-[100] bg-gray-900'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <h2 className='text-white ml-2 font-amatic text-4xl'>SP</h2>
        </Link>

        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:text-yellow-500'>Home</li>
            </Link>

            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:text-yellow-500'>About</li>
            </Link>

            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:text-yellow-500'>Skills</li>
            </Link>

            <Link href='/#portfolio'>
              <li className='ml-10 text-sm uppercase hover:text-yellow-500'>Portfolio</li>
            </Link>

            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:text-yellow-500'>Contact</li>
            </Link>
          </ul>

          <div onClick={handleNav} className='md:hidden'>
            <TiThMenu size={25} className='fill-white hover:fill-yellow-500 cursor-pointer'/>
          </div>
        </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''}>
          <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-yellow-500 p-10 ease-in duration-500 z-10' : 
          'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div className='z-0 bg-black opacity-0'></div>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link href='/'>
                  <h2 className='text-gray-900'>SP</h2>
                </Link>
                <div onClick={handleNav} className='rounded-full border-yellow-500 hover:border-2 hover:border-gray-900 p-3 cursor-pointer ease-in duration-100'>
                  <AiOutlineClose size={20} className='fill-gray-900'/>
                </div>
              </div>
              <div className='border-t border-gray-900/50 border-2 mt-3'></div>
            </div>
            <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm text-gray-900 hover:font-bold ease-in duration-100'>Home</li>
              </Link>

              <Link href='/#about'>
                <li className='py-4 text-sm text-gray-900 hover:font-bold ease-in duration-100'>About</li>
              </Link>

              <Link href='/#skills'>
                <li className='py-4 text-sm text-gray-900 hover:font-bold ease-in duration-100'>Skills</li>
              </Link>

              <Link href='/#portfolio'>
                <li className='py-4 text-sm text-gray-900 hover:font-bold ease-in duration-100'>Portfolio</li>
              </Link>

              <Link href='/#contact'>
                <li className='py-4 text-sm text-gray-900 hover:font-bold ease-in duration-100'>Contacts</li>
              </Link>
            </ul>
            <div className='pt-36'>
              <p className='uppercase tracking-widest text-gray-900 font-bold ease-in duration-300'>Connect With Me</p>
              
              <div className='flex items-center justify-between my-4 space-x-2 w-full sm:w-[80%]'>
                <a href='mailto:saccani.paramitaa@gmail.com'>
                  <div className='rounded-full border-gray-900 border-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <SiGmail className='fill-gray-900'/>
                  </div>
                </a>

                <a href='https://www.instagram.com/sacca.ni/?igshid=ZDc4ODBmNjlmNQ==' target='__blank'>
                  <div className='rounded-full border-gray-900 border-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsInstagram className='fill-gray-900' />
                  </div>
                </a>

                <a href='https://www.linkedin.com/in/saccani-paramita/' target='__blank'>
                  <div className='rounded-full border-gray-900 border-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsLinkedin className='fill-gray-900'/>
                  </div>
                </a>

                <a href='https://github.com/saccaniparamita' target='__blank'>
                  <div className='rounded-full border-gray-900 border-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiFillGithub className='fill-gray-900'/>
                  </div>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar