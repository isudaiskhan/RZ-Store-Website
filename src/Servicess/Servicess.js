import React from 'react'
import image from '../assets/images.png'
import image1 from '../assets/images (1).png'
import image2 from '../assets/images (2).png'
import image3 from '../assets/images (3).png'
import image4 from '../assets/images (4).png'
import image5 from '../assets/images (5).png'



const Servicess = () => {
  return (
    <>
  <div className='w-full py-20 px-4' id='services'>

   <h1 className='text-center md:text-[58px] text-[28px] text-[#35424a]'>HERE'S WHAT I'M GOOD AT</h1>
   <p className='text-center md:text-2xl text-xl py-5 font-medium'>These are the services loffer</p>
 
  <div className='max-w-[1321px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
    {/* Card 1 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center border'>
      <img src={image} className='w-32 h-32 mb-8 mx-auto md:mx-0 '/>
      <div className='w-full mx-auto text-lg font-semibold text-[#35424a] mb-4'>
        WEB DEVELOPMENT
      </div>
      <div className='w-full px-9 mx-auto'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>




    {/* Card 2 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center border'>
      <img src={image1} className='w-32 h-32 mb-8 mx-auto md:mx-0 bg-black' />
      <div className='w-full mx-auto text-lg font-semibold text-[#35424a] mb-4'>
        TECHNICAL WRITING
      </div>
      <div className='w-full px-9 mx-auto'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>



  
    {/* Card 3 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center border'>
      <img src={image2} className='w-32 h-32 mb-8 mx-auto md:mx-0' />
      <div className='w-full mx-auto text-lg font-semibold text-[#35424a] mb-4'>
        MOBILE DEVELOPMENT
      </div>
      <div className='w-full px-9 mx-auto'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>





    {/* Card 4 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center border'>
      <img src={image3} className='w-32 h-32 mb-8 mx-auto md:mx-0' />
      <div className='w-full mx-auto text-lg font-semibold text-[#35424a] mb-4'>
        EMAIL DEVELOPMENT
      </div>
      <div className='w-full px-9 mx-auto'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>





    {/* Card 5 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center border'>
      <img src={image4} className='w-32 h-32 mb-8 mx-auto md:mx-0' />
      <div className='w-full mx-auto text-lg font-semibold text-[#35424a] mb-4'>
        GRAPHIC DESIGN
      </div>
      <div className='w-full px-9 mx-auto'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>



    {/* Card 6 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center border'>
      <img src={image5} className='w-32 h-32 mb-8 mx-auto md:mx-0' />
      <div className='w-full mx-auto text-lg font-semibold text-[#35424a] mb-4'>
        WEB DESIGN
      </div>
      <div className='w-full px-9 mx-auto'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>

  </div>

</div>


      
    </>
  )
}

export default Servicess
