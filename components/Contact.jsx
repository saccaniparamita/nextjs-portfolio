import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactImage from '/public/img/Contact.svg'
import { GoPrimitiveDot } from 'react-icons/go'
import { SiGmail } from "react-icons/si";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div id='contact'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.25 }}
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        }}>
          <div className='w-full md:h-full p-2 flex flex-col items-start py-16 md:flex md:items-center'>
              <div className='font-work ml-10 mb-5 md:ml-0'>
                  <div className='flex items-start md:flex md:items-center'>
                    <GoPrimitiveDot size={25} className='fill-yellow-500 md:mt-[-5%]'/>
                    <GoPrimitiveDot />
                    <div className='tracking-wider text-2xl'>CONTACT</div>
                  </div>
                </div>

                <div className='w-[95%] h-20 border-t-2 border-yellow-500 m-auto md:max-w-[30%] md:h-0 md:mt-0 mb-0'></div>

                <div className='flex flex-col md:flex-row-reverse md:justify-center m-auto md:mt-20 md:gap-36'>
                  <Image src={ContactImage} />
                  <div className='flex flex-col m-auto'>
                    <h2 className='font-work text-4xl tracking-wider text-white'>GET IN</h2>
                    <h1 className='font-work text-8xl tracking-tighter text-white md:mb-5'>TOUCH</h1>
                    <div className='flex items-center justify-between my-4 space-x-2 gap-6 w-full sm:w-[80%] m-auto'>
                      <a href='mailto:saccani.paramitaa@gmail.com' target='__blank'>
                        <div className='rounded-full border-yellow-500 border-2 p-3 cursor-pointer group hover:scale-105 hover:bg-yellow-500 ease-in duration-300'>
                          <SiGmail size={25} className='fill-yellow-500 group-hover:fill-gray-900 ease-in duration-300'/>
                        </div>
                      </a>

                      <a href='https://www.instagram.com/sacca.ni/?igshid=ZDc4ODBmNjlmNQ==' target='__blank'>
                        <div className='rounded-full border-yellow-500 border-2 p-3 cursor-pointer group hover:scale-105 hover:bg-yellow-500 ease-in duration-300'>
                          <BsInstagram size={25} className='fill-yellow-500 group-hover:fill-gray-900 ease-in duration-300' />
                        </div>
                      </a>

                      <a href='https://www.linkedin.com/in/saccani-paramita/' target='__blank'>
                        <div className='rounded-full border-yellow-500 border-2 p-3 cursor-pointer group hover:scale-105 hover:bg-yellow-500 ease-in duration-300'>
                          <BsLinkedin size={25} className='fill-yellow-500 group-hover:fill-gray-900 ease-in duration-300'/>
                        </div>
                      </a>

                      <a href='https://github.com/saccaniparamita' target='__blank'>
                        <div className='rounded-full border-yellow-500 border-2 p-3 cursor-pointer group hover:scale-105 hover:bg-yellow-500 ease-in duration-300'>
                          <AiFillGithub size={25} className='fill-yellow-500 group-hover:fill-gray-900 ease-in duration-300'/>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <p className='mx-10 font-work mt-24 text-center text-yellow-500 opacity-50'>Copyright © 2023 Saccani Paramita. All Rights Reserved</p>
          </div>
        </motion.div>
    </div>
  )
}

export default Contact