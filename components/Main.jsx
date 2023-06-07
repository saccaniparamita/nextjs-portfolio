import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link'

const Main = () => {
    const line1 = "Let's Create Magic Together";
    const line2 = "WEB | GRAPHIC";

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    
    const TextSpan = ({children}) => {
        return (
            <motion.span>
                {children}
            </motion.span>
        )
    }
    
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <motion.p
                    className='text-work text-md tracking-wider text-white'
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "--" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}

                </motion.p>

                <motion.h1
                    className='text-work text-6xl tracking-wider text-white py-4'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    Hello, I'm <span className='text-yellow-500'>Saccani</span>
                </motion.h1>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}    
                >
                <div className='text-work text-md tracking-wider'>
                        {line2.split("").map((char, index) => {
                            return (
                                <motion.div className='inline-block mr-0.5' whileHover={{scale: 1.5}}>
                                    <TextSpan key={index}>
                                        {char}
                                    </TextSpan>
                                </motion.div>
                            )
                        })}

                    <span>
                       &nbsp;DESIGNER
                    </span>
                </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.25 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}>
                        <div className='text-work py-5 text-white max-w-[70%] m-auto'>
                            <p>I'm a Graphic and Web Designer who occasionally do Front-End development.</p>
                        </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}>
                        <div className='flex flex-col max-w-[50%] m-auto md:flex-row md:justify-center md:gap-10 md:m-auto md:w-screen sm:w-screen md:max-h-auto text-work'>
                            <Link href='/#contact'>
                                <div className='rounded border-2 border-yellow-500 p-2 mt-5 text-white hover:bg-yellow-500 hover:text-gray-900 cursor-pointer ease-in duration-200 md:px-5'>
                                    <p>Connect with Me</p>
                                </div>
                            </Link>

                            <Link href='/#portfolio'>
                                <div className='rounded border-2 border-yellow-500 p-2 mt-5 text-white hover:bg-yellow-500 hover:text-gray-900 cursor-pointer ease-in duration-200 md:px-5'>
                                    <p>View Portfolio</p>
                                </div>
                            </Link>
                        </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Main