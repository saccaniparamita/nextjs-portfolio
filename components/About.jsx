import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import Image from 'next/image'
import laptopImage from '/public/img/laptop-svg.svg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.25 }}
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        }}>
        <div className='w-full md:h-fit p-2 flex flex-col items-start py-16 md:flex md:items-center'>
          <div className='font-work ml-10 mb-5 md:ml-0'>
              <div className='flex items-start md:flex md:items-center'>
                <GoPrimitiveDot size={25} className='fill-yellow-500 md:mt-[-5%]'/>
                <GoPrimitiveDot />
                <div className='tracking-wider text-2xl'>ABOUT ME</div>
              </div>
            </div>

          <div className='w-[95%] h-20 border-t-2 border-yellow-500 m-auto md:max-w-[30%] md:h-0 md:mt-0 md:mb-0'></div>
          
          <div className='flex flex-col-reverse items-center justify-center m-auto mt-20 md:mt-28 max-h-screen lg:flex-row lg:max-w-[80%] lg:mt-10'>
            <div className='text-work text-center mt-[-2%] lg:text-left m-10 md:max-w-[50%] md:text-lg sm:max-h-fit'>
              <p>For the most years of my life, I have been fascinated by design and code. The two things that goes hand in hand, especially in the Industrial Revolution 4.0 since the year 2011.
                <br></br>
                <br></br>
                I have been called a &nbsp;
                <span>
                  <i>
                    'Tech Nerd'
                  </i>
                </span>
                &nbsp; and &nbsp;
                <span>
                  <i>
                    'Creative Artist'
                  </i>
                </span>
                &nbsp; all my life. I learn most things by self-taught and tinkering with it. I also have a creative approach to things and able to think critically in front of most problems.
                <br></br>
                <br></br>
                I have an endless curiosity and a thirst for new knowledge. Because of that, I can be a creative critical thinker when a problem arises and will always up for learning new things.
              </p>
              
            </div>

            <Image
              src={laptopImage}
              alt='About Me'
              width={400}
              height={400}
              className='m-auto mt-[-10%] md:mt-0'
            />
          </div>
        </div>
      </motion.div>
    </div>


    
  )
}

export default About