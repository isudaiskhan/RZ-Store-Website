import React from 'react'
import { FiChevronRight } from "react-icons/fi";


const Form = () => {
  return (
    <>

       
<div className="w-full py-16 px-4" id='contact'>
  <div className="max-w-[1321px] mx-auto">
    <h1 className="text-center md:text-6xl text-4xl text-[#35424a]">HERE'S A CONTACT FORM</h1>
    <p className="text-center md:text-4xl mt-3 text-xl py-5">Have Any Questions ?</p>
    <div className='text-center w-full mx-auto pt-5 sm:w-2/3 lg:pt-6'>
    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit condimentum turpis nisl sem, viverra habitasse urna ante lobortis fermentum accumsan. Viverra habitasse urna ante lobortis fermentum accumsan.</p>
    </div>

    <form class="grid grid-cols-1 gap-4 mx-auto w-full pt-10 sm:w-3/4">

      <div class="flex flex-col md:flex-row">
        <div className='md:w-1/2 md:mr-7 my-3'>
          <input type="text" id="input1" name="input1" placeholder='Name' class="mr-3 w-full border rounded border-gray-200 px-4 py-3 text-black lg:mr-5 focus:outline-blue-700" />
        </div>
        <div className='md:w-1/2 my-3'>
          <input type="email" id="input2" name="input2" placeholder='Email' class="mr-3 w-full border  rounded border-gray-200 px-4 py-3 text-black lg:mr-5 focus:outline-blue-700" />
        </div>
      </div>

      <div>
        <textarea id="textarea" placeholder='Message' name="textarea" rows="10" class="p-2 px-4 py-3 w-full border border-gray-200 rounded-md focus:outline-blue-700"></textarea>
      </div>

      <div class="flex items-center justify-start">
        <button type="submit" class="hover:bg-[#35424a] mt-5 font-semibold flex items-center text-white px-10 py-4 rounded bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
         SEND
         <FiChevronRight className=' text-2xl relative -right-2' />
        </button>
      </div>

    </form>
  </div>

  </div>
  

    </>
  )
}

export default Form
