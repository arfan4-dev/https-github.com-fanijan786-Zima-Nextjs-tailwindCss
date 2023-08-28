import React from 'react'
import Image from 'next/image'
const GroupThree = () => {
  return (
    <div className='h-[500px] bg-slate-100'>
        <div className=' flex flex-col justify-center items-center h-[500px] '>
        <p>REVOLUTIONARY</p>
        <div className='flex gap-x-24 mt-10 items-center mb-10'>
        <Image src='/images/logo.png'  alt='Zimo logo' width={100} height={150} />
            <p className='h-24 border-r-2 border-gray-500 '></p>
            <Image src='/images/logo.png'  alt='Zimo logo' width={100} height={150} />
        </div>
        <p>{`The only platform of it's kind in the world.`}</p>
    </div>
    </div>
    
  )
}

export default GroupThree