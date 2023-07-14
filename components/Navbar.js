import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import  { GrCart } from 'react-icons/gr'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full bg-gray-700'>
        <div className='logo flex items-center justify-center space-x-5'>
            <Link href={'/'}><Image src={'/logo/logo6.png'} width={70} height={30} /></Link>
            <ul className='text-white flex space-x-5'>
               <Link className='cursor-pointer hover:text-[#00A4BF]'  href={'/'}><li>Tshirts</li></Link>
               <Link className='cursor-pointer hover:text-[#00A4BF]'  href={'/'}><li>Hoodies</li></Link>
               <Link className='cursor-pointer hover:text-[#00A4BF]'  href={'/'}><li>Stickers</li></Link>
               <Link className='cursor-pointer hover:text-[#00A4BF]'  href={'/'}><li>Mugs</li></Link>
            </ul>
        </div>
        <div className='cart cursor-pointer flex justify-center items-center mr-7'>
            <GrCart color='white' className='text-white text-3xl' />
        </div>
    </div>
  )
}

export default Navbar