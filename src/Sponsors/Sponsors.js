import React from 'react'
import image1 from '../assets/download.webp'
import image2 from '../assets/apple.webp'
import image3 from '../assets/netflix.webp'
import image4 from '../assets/amazonlogo.png'
import image5 from '../assets/stripe.webp'



const Sponsors = () => {
  return (
    <>


 <div className='w-full py-8 px-4 bg-[#f2f2f2]' id='clients'>
  <div className='max-w-[1321px] mx-auto'>
    <h1 className='text-center md:text-6xl text-[28px] text-[#35424a]'>MY LATEST CLIENTS</h1>
    <div className='flex flex-wrap justify-center md:justify-evenly p-4 md:p-14'>
      <img src={image1} className='w-36 h-12 md:w-44 md:h-14 mx-6 my-8'/>
      <img src={image2} className='w-36 h-12 md:w-44 md:h-14 mx-6 my-8' />
      <img src={image3} className='w-36 h-12 md:w-44 md:h-14 mx-6 my-8' />
      <img src={image4} className='w-36 h-12 md:w-44 md:h-14 mx-6 my-8' />
      <img src={image5} className='w-36 h-12 md:w-44 md:h-14 mx-6 my-8' />
    </div>
  </div>
</div>



    </>
  )
}

export default Sponsors
