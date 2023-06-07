import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import Image from 'next/image'
import Link from 'next/link'

import Thumb1 from '/public/img/thumb-product-larkm1.jpg'
import Thumb2 from '/public/img/thumb-product-mini11.jpg'
import Thumb3 from '/public/img/thumb-product-sony.jpg'
import Thumb4 from '/public/img/thumb-product-x3.jpg'
import PostThumb1 from '/public/img/thumb-post-puasa.jpg'
import PostThumb2 from '/public/img/thumb-post-easter.jpg'
import PostThumb3 from '/public/img/thumb-post-goodfriday.jpg'
import PostThumb4 from '/public/img/thumb-post-nyepi.jpg'
import BannerThumb1 from '/public/img/thumb-banner-gopro.jpg'
import BannerThumb2 from '/public/img/thumb-banner-insta360.jpg'
import BannerThumb3 from '/public/img/thumb-banner-instax.jpg'
import BannerThumb4 from '/public/img/thumb-banner-monthly.jpg'
import BannerThumb5 from '/public/img/thumb-banner-sony.jpg'

const Portfolio = () => {

  return (
    <div id='portfolio'>
        <div className='w-full md:h-full p-2 flex flex-col items-start py-16 md:flex md:items-center'>
          <div className='font-work ml-10 mb-5 md:ml-0'>
              <div className='flex items-start md:flex md:items-center'>
                <GoPrimitiveDot size={25} className='fill-yellow-500 md:mt-[-5%]'/>
                <GoPrimitiveDot />
                <div className='tracking-wider text-2xl'>PORTFOLIO</div>
              </div>
            </div>

            <div className='w-[95%] h-20 border-t-2 border-yellow-500 m-auto md:max-w-[30%] md:h-0 md:mt-0 mb-0'></div>

            <div className='flex flex-col md:w-full m-auto md:my-20 font-work text-left'>
              <h3 className='text-work text-xl m-auto mb-2 text-center text-yellow-500'>Marketplace Product Thumbnail</h3>

              <p className='text-work text-sm md:text-md m-auto mx-4 md:mx-24 mb-5 text-center md:text-center'>For more audience, most online stores need a catchy thumbnail to catch the attention of potential customers. 
              A good thumbnail image is not only a product image in a blank canvas, instead it needs to also have product information, advantages, and of course an appealing design and layout.</p>

              <div className='flex flex-col md:flex-row flex-wrap justify-center m-auto gap-8 mb-20'>
                <Image src={Thumb1} quality={100} className=''/>
                <Image src={Thumb2} quality={100} className=''/>
                <Image src={Thumb3} quality={100} className=''/>
                <Image src={Thumb4} quality={100} className=''/>
              </div>

              <h3 className='text-work text-xl m-auto mb-2 text-center text-yellow-500'>Social Media Posts</h3>

              <p className='text-work text-sm md:text-md m-auto mx-4 md:mx-24 mb-5 text-center md:text-center'>Social media is one of the top media for advertising. Be it direct advertisement or just a celebratory post, a good design will catch users' attention.</p>

              <div className='flex flex-col md:flex-row flex-wrap justify-center m-auto gap-8 mb-20'>
                <Image src={PostThumb1} quality={100} className=''/>
                <Image src={PostThumb2} quality={100} className=''/>
                <Image src={PostThumb3} quality={100} className=''/>
                <Image src={PostThumb4} quality={100} className=''/>
              </div>

              <h3 className='text-work text-xl m-auto mb-2 text-center text-yellow-500'>Banners</h3>

              <p className='text-work text-sm md:text-md m-auto mx-4 md:mx-24 mb-5 text-center md:text-center'>Advertisement via banners is a popular method, whether putting it on a web page or offline places.</p>

              <div className='flex flex-col flex-wrap justify-center m-auto gap-8 mb-10'>
                <Image src={BannerThumb1} quality={100} className=''/>
                <Image src={BannerThumb2} quality={100} className=''/>
                <Image src={BannerThumb3} quality={100} className=''/>
                <Image src={BannerThumb4} quality={100} className=''/>
                <Image src={BannerThumb5} quality={100} className=''/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio