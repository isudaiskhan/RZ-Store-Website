import React from 'react'
import image1 from '../assets/post1.png'
import image2 from '../assets/post02.png'
import image3 from '../assets/post03.png'



const Blogs = () => {
  return (
    <>

     
 <div className='w-full bg-[#f2f2f2] py-24 md:py-24 px-4' id='blog'>
  <div className='max-w-[1321px] mx-auto'>
    <h1 className='text-center md:text-6xl text-[28px] text-[#35424a]'>I ALSO LIKE TO WRITE</h1>
    <p className='text-center md:text-3xl text-xl py-7'>Check out my latest posts!</p>
   
          
    <div class="container mx-auto mt-8">
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Blog 1 */}
            <a href="#" class="hover:no-underline">
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col">
                <img src={image1}  class="w-full h-72 object-cover mb-8 rounded" />
                <h2 class="text-xl font-semibold mb-2">How to become a frontend developer</h2>
                <p class="text-gray-600 flex-grow text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="outline outline-2 hover:bg-[#40b1f2] hover:text-white outline-[#40b1f2] px-7 py-2 rounded-full mt-6 inline-block self-end">READ MORE</a>

            </div>
            </a>

             
       
                 {/* Blog 2 */}
                 <a href="#" class="hover:no-underline">
                 <div class="bg-white p-4 rounded-lg shadow-md flex flex-col">
                 <img src={image2} class="w-full h-72 object-cover mb-8 rounded" />
                 <h2 class="text-xl font-semibold mb-2">My personal productivity system</h2>
                 <p class="text-gray-600 flex-grow text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <a href="#" class="outline outline-2 hover:bg-[#FFB236] hover:text-white outline-[#FFB236] px-7 py-2 rounded-full mt-6 inline-block self-end">READ MORE</a>
                 </div>
                 </a>






              {/* Blog 3 */}
              <a href="#" class="hover:no-underline">
              <div class="bg-white p-4 rounded-lg shadow-md flex flex-col">
                <img src={image3}  class="w-full h-72 object-cover mb-8 rounded" />
                <h2 class="text-xl font-semibold mb-2">My personal review year is 2020</h2>
                <p class="text-gray-600 flex-grow text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="outline outline-2 hover:bg-[#00df9a] hover:text-white outline-[#00df9a] px-7 py-2 rounded-full mt-6 inline-block self-end">READ MORE</a>
            </div>
            </a>


            </div>
            </div>
  
    </div>
    </div>
    

    </>
  )
}

export default Blogs
