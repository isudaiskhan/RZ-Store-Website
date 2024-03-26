import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import bgImage from '../assets/workstation.jpg'

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const HandleNav = () =>{
        setNav(!nav);
    }
  return (
    <>

<div className={'bg-no-repeat bg-cover bg-center h-[660px] bg-blend-multiply bg-[#35424a]'} 
style={{ backgroundImage: `url(${bgImage})`}} >

      
       <div className='text-white flex justify-between items-center h-24 max-w-[1321px] m-auto'>
          <h1 className='w-full text-5xl lg:ps-0 ps-12 font-semibold font-serif cursor-pointer lg:text-6xl'><a href='#'>ATQM</a></h1>

          <ul className='lg:flex hidden'>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#about'>ABOUT</a></li>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#services'>SERVICES</a></li>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#portfolio'>PORTFOLIO</a></li>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#clients'>CLIENTS</a></li>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#work'>WORK</a></li>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#statistics'>STATISTICS</a></li>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#blog'>BLOG</a></li>
            <li className='p-4 border-b-2 border-transparent hover:border-yellow-500'><a href='#contact'>CONTACT</a></li>
          </ul>

          <div onClick={HandleNav} className='block lg:hidden pe-12'>
              {
                !nav ? <AiOutlineClose size={24} className='cursor-pointer' /> :  <AiOutlineMenu size={24} className='cursor-pointer' /> 
              }
                
              </div>


           <div className={!nav ? 'fixed left-0 top-0 w-[50%] lg:hidden  h-full ease-in-out duration-700 transition-all bg-[#35424a]' : 'fixed left-[-100%]'}>  
                <ul className='p-4'>
                    <li className='p-4 bg-blue-500 rounded-md border-b border-b-gray-500'><a href='#about'>ABOUT</a></li>
                    <li className='p-4 border-b border-b-gray-500'><a href='#services'>SERVICES</a></li>
                    <li className='p-4 border-b border-b-gray-500'><a href='#portfolio'>PORTFOLIO</a></li>
                    <li className='p-4 border-b border-b-gray-500'><a href='#clients'>CLIENTS</a></li>
                    <li className='p-4 border-b border-b-gray-500'><a href='#work'>WORK</a></li>
                    <li className='p-4 border-b border-b-gray-500'><a href='#statistics'>STATISTICS</a></li>
                    <li className='p-4 border-b border-b-gray-500'><a href='#blog'>BLOG</a></li>
                    <li className='p-4 border-b border-b-gray-500'><a href='#contact'>CONTACT</a></li>
                </ul>
           </div>

       </div>
</div>
      
    </>
  )
}

export default Navbar


