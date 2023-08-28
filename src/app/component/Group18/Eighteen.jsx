import React from 'react'
import Image from 'next/image'
const Eighteen = () => {
  return (
    <div>
     <div className='bg-black h-screen flex flex-col justify-center items-center'>
  <div className='relative'>
    <Image src="/images/19White.png" alt="picture" width={500} height={500} className='mt-5 blur-image' style={{filter: 'blur(10px)'}}/>

    <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-5xl font-bold'>
      PRIVATE ISLANDS
    </div>
  </div>
</div>


    


  </div>
  )

}

export default Eighteen