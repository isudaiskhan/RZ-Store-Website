import React from 'react'
import image from '../assets/bg-cta.jpg'

const Newsletter = () => {
  return (
    <>

        <div className={'bg-no-repeat bg-cover bg-center bg-blend-multiply bg-[#4a5e68]'} 
        style={{ backgroundImage: `url(${image})`}} >

        <div className='w-full py-20'>
        <div className='max-w-[1321px] mx-auto grid lg:grid-cols-3'>

        <div className='lg:col-span-3'>
            <h1 className='md:text-4xl leading-tight tracking-wide text-white text-center sm:text-3xl text-3xl lg:text-5xl py-2'>KEEP <span className='font-semibold'>UP-TO-DATE </span><br></br> WITH WHAT I'M UP TO</h1>
        </div>
          
          
        <div className='flex flex-col sm:flex-row items-center justify-center lg:col-span-3'>
         <input type="email" id="input2" name="input2" placeholder='Enter Your Email' class="p-4 flex w-full sm:w-1/3 rounded text-black focus:outline-blue-700" />
            <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-green-500 hover:via-teal-500 hover:to-blue-500 text-white w-full sm:w-[150px] sm:ml-4 my-6 p-4 rounded'>JOIN THE CLUB</button>

        </div>

        </div>
       </div>
       </div>
       
    </>
  )
} 

export default Newsletter
