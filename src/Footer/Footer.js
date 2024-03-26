import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <>
      
  

          <footer class="bg-[#35424a] text-white py-7">
              <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div class="text-center md:text-left mb-2 md:mb-0">
                  <p class="text-base">© Copyright 2022. All rights reserved, ATOM.</p>
                </div>
                <div class="flex justify-center md:justify-end space-x-4">
                
                  <a href='#'>
                  <FaFacebook className='text-2xl text-white hover:text-blue-500' />
                </a>
                <a href='#' className='pl-4'>
                  <FaTwitter className='text-2xl text-white hover:text-[#7acdee]' />
                </a>
                <a href='#' className='pl-4'>
                  <FaInstagram className='text-2xl text-white hover:text-orange-500' />
                </a>
                <a href='#' className='pl-4'>
                  <FaYoutube className='text-2xl text-white hover:text-red-500' />
                </a>
                </div>
              </div>
            </footer>


    </>
  )
}

export default Footer
