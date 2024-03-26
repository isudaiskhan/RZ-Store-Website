import React from 'react'
import clippath from '../assets/figure.png'
import image1 from '../assets/rocket.webp'
import image2 from '../assets/cup.webp'
import image3 from '../assets/message.webp'
import image4 from '../assets/fill.webp'






const Clippath = () => {
  return (
    <>



  <div className='relative mt-10' id='statistics'>

    {/* Background Image */}
    <div className={'bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24 flex items-center justify-center'} 
    style={{ backgroundImage: `url(${clippath})`}} >


    <div class="container px-16">
        <div class="mx-auto w-5/6 bg-white py-16 shadow md:w-full lg:py-20 xl:py-28 2xl:w-full">
          <div class="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
          {/* Item 1 */}
            <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <img src={image1} class="mx-auto h-12 w-auto md:h-20" />
              </div>
              <div class="pt-5 md:pl-5 md:pt-0">
                <h1 class="text-xl font-bold md:text-4xl text-[#35424a]">
                  12
                </h1>
                <h4 class="text-base font-medium leading-loose md:text-xl">
                  Finished Projects
                </h4>
              </div>
            </div>


         
         {/* Item 2 */}
        <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
          <div>
            <img src={image2} class="mx-auto h-12 w-auto md:h-20" />
          </div>
          <div class="pt-5 md:pl-5 md:pt-0">
            <h1 class="text-xl font-bold md:text-4xl text-[#35424a]">
              3
            </h1>
            <h4 class="text-base font-medium leading-loose md:text-xl">
              Awards Won
            </h4>
          </div>
        </div>




         {/* Item 3 */}
        <div class="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
          <div>
            <img src={image3} class="mx-auto h-12 w-auto md:h-20" />
          </div>
          <div class="pt-5 md:pl-5 md:pt-0">
            <h1 class="text-xl font-bold md:text-4xl text-[#35424a]">
              8
            </h1>
            <h4 class="text-base font-medium leading-loose md:text-xl">
              Happy Clients
            </h4>
          </div>
        </div>


        {/* Item 4 */}
        <div class="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
          <div>
            <img src={image4} class="mx-auto h-12 w-auto md:h-20" />
          </div>
          <div class="pt-5 md:pl-5 md:pt-0">
            <h1 class="text-xl font-bold md:text-4xl text-[#35424a]">
              99
            </h1>
            <h4 class="text-base font-medium leading-loose md:text-xl">
              Bugs Fixed
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
 </div>
 




    </>
  )
}

export default Clippath
