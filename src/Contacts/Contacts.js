import React from 'react'
import { HiOutlinePhone } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaRegEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <>

          
<div className="w-full px-4 pb-16">
  <div className="max-w-[1321px] mx-auto">
 <div className='flex flex-col pt-20 lg:flex-row'>
    <div className='w-full border-l-2 border-t-2 border-r-2 border-b-2 border-gray-300 px-6 py-6 sm:py-8 lg:w-1/3'>
        <div className='flex items-center'>
        <HiOutlinePhone className='text-gray-600 text-2xl' />
        <p className='pl-2 font-semibold text-gray-500 lg:text-lg'>MY PHONE</p>
        </div>
        <p className='pt-2 text-left font-semibold text-[#35424a] lg:text-lg'> (+881) 111 222 333 </p>
    </div>


{/* 2 My Email */}
    <div className='w-full border-l-2 border-t-2 border-r-2 border-b-2 border-gray-300 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2'>
    <div className='flex items-center'>
        <FaRegEnvelope className='text-gray-600 text-2xl' />
        <p className='pl-2 font-semibold text-gray-500 lg:text-lg'>MY EMAIL</p>
        </div>
        <p className='pt-2 text-left font-semibold text-[#35424a] lg:text-lg'> name@mydomain.com </p>
    </div>



  {/*3 My Address */}
    <div className='w-full border-l-2 border-t-2 border-r-2 border-b-2 border-gray-300 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2'>
    <div className='flex items-center'>
        <TfiLocationPin className='text-gray-600 text-2xl' />
        <p className='pl-2 font-semibold text-gray-500 lg:text-lg'>MY ADDRESS</p>
        </div>
        <p className='pt-2 text-left font-semibold text-[#35424a] lg:text-lg'> 123 New York D Block 1100, 2011 USA </p>
    </div>
    </div>
    </div>
    </div>

      
    </>
  )
}

export default Contacts
