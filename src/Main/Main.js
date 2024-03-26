import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'
import { FiChevronRight } from "react-icons/fi";

const Main = () => {
  return (
    <>


<div className='w-full bg-[#f2f2f2] py-16 px-4' id='about'>
  <div className='max-w-[1321px] mx-auto flex flex-col md:flex-row-reverse'>

    <div className='md:w-2/4 flex flex-col pt-16 md:order-1 md:px-28'>

      <div className="mb-6 md:mb-2">
        <div className="flex flex-col md:flex-row justify-between">
          <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">HTML & CSS</span>
          <span className="text-xl font-medium text-[#35424a] dark:text-white">85%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-5">
          <div style={{ width: '85%' }} className="bg-gray-700 h-2.5 rounded-full"></div>
        </div>
      </div>

      <div className="mb-6 md:mb-2">
        <div className="flex flex-col md:flex-row justify-between">
          <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">PYTHON</span>
          <span className="text-xl font-medium text-[#35424a] dark:text-white">70%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-5">
          <div style={{ width: '70%' }} className="bg-purple-600 h-2.5 rounded-full"></div>
        </div>
      </div>

      <div className="mb-6 md:mb-2">
        <div className="flex flex-col md:flex-row justify-between">
          <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">JAVASCRIPT</span>
          <span className="text-xl font-medium text-[#35424a] dark:text-white">98%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-5">
          <div style={{ width: '98%' }} className="bg-green-600 h-2.5 rounded-full"></div>
        </div>
      </div>

      <div className="mb-6 md:mb-2">
        <div className="flex flex-col md:flex-row justify-between">
          <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">FIGMA</span>
          <span className="text-xl font-medium text-[#35424a] dark:text-white">91%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-5">
          <div style={{ width: '91%' }} className="bg-indigo-600 h-2.5 rounded-full"></div>
        </div>
      </div>

    </div>

    <div className='md:w-3/5 md:ml-8 flex flex-col md:order-2'>

      <h1 className='md:text-6xl sm:text-4xl text-3xl py-2 text-[#35424a]'>WHO AM I?</h1>
      <h1 className='md:text-[15px] sm:text-2xl lg:text-[20px] py-5 font-serif'>I'm Christy Smith, a Web Designer & Photographer</h1>

      <p className='text-justify text-[#474747]'>By virtue of its decades-long legacy of being a distinguished public sector engineering university at the National and International level, I feel proud to lead an institution, which is my alma mater. The admissions process for the new academic session (2022-23) has just started after undergoing a complete revamping from a manual to an online operation. It may assist you and to ensure that the process goes through seamlessly.</p>

      <p className='py-4 flex items-center space-x-2 text-start text-[#474747] font-semibold text-xl'>
           CONNECT WITH ME
           <span className='px-2'>
             <FiChevronRight className='text-xl text-[#35424a]' />
           </span>
           <span className='flex space-x-2 md:space-x-6 items-center'>
             <FaFacebook className='text-[#35424a] hover:text-blue-500 cursor-pointer' /> <FaTwitter className='text-[#35424a] hover:text-[#7acdee] cursor-pointer' /> <FaInstagram className='text-[#35424a] hover:text-orange-500 cursor-pointer' /> <FaYoutube className='text-[#35424a] hover:text-red-500 cursor-pointer' />
           </span>
         </p>

    </div>

  </div>
</div>


     
    </>
  )
}

export default Main
