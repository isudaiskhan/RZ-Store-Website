import React from 'react'
import image1 from '../assets/portfolio.jpeg'
import image2 from '../assets/stripe.jpeg'
import image3 from '../assets/fedex.jpeg'
import image4 from '../assets/microsoft.jpeg'





const Portfolio = () => {
  return (
    <>
      


 <div className='w-full py-20 px-4' id='portfolio'>
  <h1 className='text-center md:text-[58px] text-[28px] text-[#35424a]'>CHECK OUT MY PORTFOLIO</h1>
  <p className='text-center md:text-3xl text-xl py-5'>Here's what I have done in the past</p>

  <div className='max-w-[1321px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
    {/* Porfolio 1 */}
    <div className='md:col-span-1 md:flex md:flex-col border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 '>
      <a href='image1'>
        <img src={image1} />
      </a>
    </div>


    {/* Porfolio 2 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center mt-4 md:mt-0 border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
      <a href='image2'>
        <img src={image2} />
      </a>
    </div>
  </div>


  <div className='max-w-[1321px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
    {/* Portfolio 3 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
      <a href='image3'>
        <img src={image3} />
      </a>
    </div>

    {/* Porfolio 4 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center mt-4 md:mt-0 border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
      <a href='image4'>
        <img src={image4} />
      </a>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Portfolio
