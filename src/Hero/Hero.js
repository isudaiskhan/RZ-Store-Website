import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'
import { FiChevronRight } from "react-icons/fi";
import image from '../assets/WhatsApp.jpeg'


const Hero = () => {
  return (
      <>
      
 <div className='text-white mt-[-600px]'>
   <div className='max-w-[1100px] w-full h-[600px] mx-auto text-center flex flex-col justify-center'>

     <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 space-x-0 md:space-x-6 px-4 md:px-12'>

       <img src={image} className='h-48 w-48 rounded-full mb-4 md:mb-0 md:mr-6 border-[6px] border-[#35424a]' />

       <div>
         <h1 className='md:text-[44px] sm:text-6xl lg:text-6xl xl:text-7xl text-4xl py-3 font-thin'>
           Hello I'm Christy Smith!
         </h1>

         <p className='py-3 text-xl px-1 flex items-center space-x-2 md:space-x-6 text-start'>
           LET'S CONNECT
           <span className='px-2'>
             <FiChevronRight className=' text-2xl text-yellow-300' />
           </span>
           <span className='flex space-x-2 md:space-x-6 items-center'>
             <FaFacebook className='hover:text-blue-500 cursor-pointer' /> <FaTwitter className='hover:text-[#7acdee] cursor-pointer' /> <FaInstagram className='hover:text-orange-500 cursor-pointer' /> <FaYoutube className='hover:text-red-500 cursor-pointer' />
           </span>
         </p>
       </div>

     </div>
   </div>
 </div>




    </>
  )
}

export default Hero
