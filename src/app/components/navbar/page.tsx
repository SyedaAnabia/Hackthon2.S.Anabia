import Image from 'next/image';
import React from 'react';
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>

      
      <div className='flex items-center gap-2'>
        <Image src="/logo.png" alt='meubel-image' width={50} height={50}></Image>
        <span className='text-lg font-bold'>Furniro</span>
      </div>

      
      <ul className='flex gap-6 text-sm font-medium'>
        <li> <Link href={"/Home"}>Home</Link></li>
        <li><Link href={"/Shop"}>Shop</Link></li>
        <li><Link href={"/Blog"}>Blog</Link></li>
        <li><Link href={"/Contact"}>Contact</Link></li>
      </ul>

      
      <div className='flex items-center gap-4 text-xl'>
        <CgProfile />
        <AiOutlineSearch />
        <BiHeart />
        <BsCart3 />
      </div>
    </div>
  );
}









