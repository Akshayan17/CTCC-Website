import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='flex justify-between p-5 px-5 shadow-sm'>
            <div>
                <Image src='/logo.png' alt='logo'
                    width={500} height={500} />
            </div>
            <div>
                <ul className='flex gap-7 items-center'>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>Home</li>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>About Us</li>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>Membership</li>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>Business Centre</li>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>Event</li>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>News</li>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>Gallery</li>
                    <li className='text-[18px] hover:text-purple-800 cursor-pointer'>Contact Us</li>
                </ul>
            </div>
        </div>

    )
}
export default Header