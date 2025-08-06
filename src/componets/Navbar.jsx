import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
 const Navbar = () => {
  const nav = useNavigate();
  return (
    <div>
    <div className='w-full flex justify-between items-center font-semibold'>
       <div className='flex items-center gap-2'>
        <img onClick={() => nav(-1)} className='w-8 bg-black p-2 rounded-2x1 cursor-pointer' src={assets.arrow_left}alt="" />
        <img onClick={() => nav(1)} className='w-8 bg-black p-2 rounded-2x1 cursor-pointer' src={assets.arrow_right}alt="" />
       </div>
 
       <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-3 py-1 rounded-xl hidden md:block  corsor-pointer'> Explore Premium</p>
      <a href="https://sitedesign.in/" target='_block'> <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'> Check Website</p></a>
      <p className='bg-orange-600 text-black w-7 h-7 rounded-full flex justify-center items-center cursor-pointer'>S</p>
       </div>

  
    </div>
    <div className='flex items-center gap-2 mt-4'>
       <p className='bg-white text-black  px-4 py-1 rounded-2xl  corsor-pointer'> All</p>
       <p className='bg-black  px-4 py-1 rounded-2xl  corsor-pointer'>Musics</p>
       <p className='bg-black  px-4 py-1 rounded-2xl  corsor-pointer'>Podcasts</p>
       </div>
     
    </div>
  )
}

export default Navbar;