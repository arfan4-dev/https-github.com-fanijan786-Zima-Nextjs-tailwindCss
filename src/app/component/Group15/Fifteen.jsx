import React from 'react'
import Image from "next/image";

const Fifteen = () => {
  return (
    <div>
         <div className=" flex flex-col justify-center items-center h-[600px]">
            <p className='mb-10 '>Bringing the world closer together.</p>
         <Image src="/images/15.png" alt="picture" width={300} height={400} />
         </div>
        
    </div>
  )
}

export default Fifteen