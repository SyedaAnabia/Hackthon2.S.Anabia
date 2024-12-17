import Image from 'next/image'
import React from 'react'

const Range = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-sans font-bold text-xl'>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex justify-center gap-10'>
            <div  className='text-center'>
                <Image src="/r1.png" alt='image' width={782.12} height={521} ></Image>
                <h2 className='font-bold text-xl'>Dining</h2>
            </div>
            <div className='text-center'>
                <Image src="/r2.png" alt='image' width={762.61} height={508} ></Image>
                <h2 className='font-bold text-xl'>Living</h2>
            </div>
            <div  className='text-center'>
                <Image src="/r3.png" alt='image' width={720.58} height={480} ></Image>
                <h2 className='font-bold text-xl'>Bedroom</h2>
            </div>
        </div>
    </div>
  )
}

export default Range