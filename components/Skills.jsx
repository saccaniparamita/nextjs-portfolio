import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { GiPaintBrush } from 'react-icons/gi'
import { RiCodeSSlashLine } from 'react-icons/ri'
import { SiAdobephotoshop, SiAdobeillustrator, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div id='skills'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.25 }}
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        }}>
          <div className='w-full md:h-screen p-2 flex flex-col items-start py-16 md:flex md:items-center'>
          <div className='font-work ml-10 mb-5 md:ml-0'>
              <div className='flex items-start md:flex md:items-center'>
                <GoPrimitiveDot size={25} className='fill-yellow-500 md:mt-[-5%]'/>
                <GoPrimitiveDot />
                <div className='tracking-wider text-2xl'>SKILLS</div>
              </div>
            </div>

          <div className='w-[95%] h-20 border-t-2 border-yellow-500 m-auto md:max-w-[30%] md:h-0 md:mt-0 mb-0'></div>

          <div className="flex flex-col align-items lg:flex-row justify-center gap-8 mt-[-7%] m-5 md:m-44 md:mt-24">
              <div className="border-2 border-yellow-500 rounded-lg p-4 flex-1 text-center lg:w-[50%]">
                  <GiPaintBrush size={50} className='m-auto mt-5 mb-5' />
                  <h2 className="text-3xl font-bold mb-4 text-yellow-500 tracking-wider">Graphic Design</h2>
                  <p className="text-lg">I have at least 5 years of experience and 1 year professionally in Graphic Design.</p>
                  <div className='flex flex-row align-items justify-center gap-5 mt-5 m-auto'>
                    <SiAdobephotoshop size={30} className='fill-emerald-300 hover:scale-105 ease-in duration-150'/>
                    <SiAdobeillustrator size={30} className='fill-emerald-300 hover:scale-105 ease-in duration-150'/>
                  </div>
              </div>

              <div className="border-2 border-yellow-500 rounded-lg p-4 flex-1 m-auto text-center lg:w-[50%]">
                  <RiCodeSSlashLine size={50} className='m-auto mt-5 mb-5'/>
                  <h2 className="text-3xl font-bold mb-4 text-yellow-500 tracking-wider">Programming</h2>
                  <p className="text-lg">I have 1 year of experience in HTML/CSS and some experiences in NextJS/Tailwind CSS.</p>
                  <div className='flex flex-row align-items justify-center gap-3 mt-5 m-auto'>
                    <SiHtml5 size={30} className='fill-emerald-300 hover:scale-105 ease-in duration-150'/>
                    <SiCss3 size={30} className='fill-emerald-300 hover:scale-105 ease-in duration-150'/>
                    <SiReact size={30} className='fill-emerald-300 hover:scale-105 ease-in duration-150'/>
                    <SiNextdotjs size={30} className='fill-emerald-300 hover:scale-105 ease-in duration-150'/>
                    <SiTailwindcss size={30} className='fill-emerald-300 hover:scale-105 ease-in duration-150'/>
                  </div>
              </div>
          </div>
          </div>
      </motion.div>
    </div>
  )
}

export default Skills