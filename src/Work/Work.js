import React from 'react'
import image1 from '../assets/spotify.webp'
import image2 from '../assets/microsoft.webp'
import image3 from '../assets/fedex.webp'


const Work = () => {
  return (
    <>

<div className="w-full py-8 md:py-24 px-4" id='work'>
  <div className="max-w-[1321px] mx-auto">
  
    <h1 className="text-center md:text-6xl text-4xl text-[#35424a]">MY WORK EXPERIENCE</h1>
    <p className="text-center md:text-3xl mt-3 text-xl py-5">Here's what I did before freelancing</p>

    {/* Work Experience 1 */}
    <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
      <div className="left-1/2 md:left-2/5 absolute inset-y-0 ml-[-8%] md:ml-2/5 hidden w-0.5 bg-gray-400 md:block">
      </div>
      <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
        <div className="md:w-2/5">
          <div className="flex justify-center items-center md:justify-start">
            <span className="shrink-0">
              <img src={image1} className="h-auto w-32" />
            </span>
            <div className="relative ml-3 hidden w-full md:block">
              <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5">
          <div className="relative flex md:pl-18">
            <div className="absolute lg:left-2 md:left-[10px] left-3 top-1 hidden h-5 w-5 rounded-full border-2 border-gray-400 bg-white md:block"></div>

            <div className="mt-1 flex">
              <div className="md:-mt-1 md:pl-28">
                <span className="block font-medium text-gray-400">Apr 2015 - Mar 2018</span>
                <span className="block pt-2 font-header text-xl font-semibold text-[#35424a] uppercase">Frontend Developer</span>
                <div className="pt-2">
                  <span className="block text-lg text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus
                    pulvinar tincidunt. Nam ac venenatis enim.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    



{/* Work Experience 2*/}
    <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-full">
      <div className="left-1/2 md:left-2/5 absolute inset-y-0 ml-[-8%] md:ml-2/5 hidden w-0.5 bg-gray-400 md:block"></div>

      <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
        <div className="md:w-2/5">
          <div className="flex justify-center items-center md:justify-start">
            <span className="shrink-0">
              <img src={image2} className="h-auto w-32" />
            </span>
            <div className="relative ml-3 hidden w-full md:block">
              <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5">
          <div className="relative flex md:pl-18">
            <div className="absolute lg:left-2 md:left-[10px] left-3 top-1 hidden h-5 w-5 rounded-full border-2 border-gray-400 bg-white md:block"></div>

            <div className="mt-1 flex">
              <div className="md:-mt-1 md:pl-28">
              <span className="block font-medium text-gray-400">Mar 2018 - September 2019</span>
                <span className="block pt-2 text-xl font-semibold text-[#35424a] uppercase">SOFTWARE ENGINEER</span>
                <div className="pt-2">
                  <span className="block text-lg text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus
                    pulvinar tincidunt. Nam ac venenatis enim.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    

    



{/* Work Experience 3 */}
    <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-full">
      <div className="left-1/2 md:left-2/5 absolute inset-y-0 ml-[-8%] md:ml-2/5 hidden w-0.5 bg-gray-400 md:block"></div>

      <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
        <div className="md:w-2/5">
          <div className="flex justify-center items-center md:justify-start">
            <span className="shrink-0">
              <img src={image3} className="h-auto w-32" />
            </span>
            <div className="relative ml-3 hidden w-full md:block">
              <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5">
          <div className="relative flex md:pl-18">
            <div className="absolute lg:left-2 md:left-[10px] left-3 top-1 hidden h-5 w-5 rounded-full border-2 border-gray-400 bg-white md:block"></div>

            <div className="mt-1 flex">
              <div className="md:-mt-1 md:pl-28">
              <span className="block font-medium text-gray-400">October 2019 - Feb 2021</span>
                <span className="block pt-2 text-xl font-semibold text-[#35424a] uppercase">DEVOPS ENGINEER</span>
                <div className="pt-2">
                  <span className="block text-lg text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus
                    pulvinar tincidunt. Nam ac venenatis enim.
                  </span>
                </div>
              </div>
            </div>
          </div>
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

export default Work