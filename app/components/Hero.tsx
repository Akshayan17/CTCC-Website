import Image from 'next/image'
import React, { useState } from 'react'
import category from '../data/category'

function Hero({userInput}:any) {
  const [searchInput,setSearchInput]=useState<string>();
  return (
    <div className='text-center translate-y-[-50px]'>
      <div>
        <Image src='/Skyline.png' alt='hero-image'
          width={800}
          height={200}
          className='w-full absolute mt-[50px]' />
      </div>
      <div className='mt-[70px]'>
        <h2 className='text-[100px] text-purple-800 -tracking-widest font-bold'>Our Amazing Corporate Members</h2>
        <div className='mt-5 z-10s flex gap-2 items-center justify-center'>
          <input type='text'
           onChange={(e)=>setSearchInput(e.target.value)}
            placeholder='Search Corporate Member'
            className='z-50 bg-white p-3 
                    border-[1px] rounded-full px-5 w-[36%] 
                    shadow-sm'/>
          <button 
          onClick={()=>userInput(searchInput)}
          className='bg-purple-800 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
        <div className='mt-5 flex flex-col justify-center items-center'>
            <h2>Or Browse Categories</h2>
            <div className = 'grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-10 mt-3'>
              {category.map((item,index)=>(
                <div className='border-[1px] w-[60px] p-4 bg-purple-400 rounded-full z-10
                hover:border-black hover:scale-110 cursor-pointer'>
                  <Image src={item.icon} alt={item.name} width={30} height={30}/>
                  </div>
           ))}
              </div>
        </div>
      </div>
    </div>

  )
  }

export default Hero