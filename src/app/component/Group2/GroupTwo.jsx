import Image from 'next/image'
import React from 'react'
import './style.css'
const GroupTwo = () => {
  return (
    <div>
        <div >
           <div id='first' className='flex justify-start gap-96 bg-black text-white items-center h-[500px] mt-5 sm:justify-around md:justify-around'>
           <Image id='firstA' src='/images/19White.png'  alt='Zimo logo' width={100} height={150} />
            <p id='firstB' className='text-center'>We are the global platform. <br/> <span>Services in over one hundred and twenty countries.</span></p>

           </div>
           
        </div>
    </div>
  )
}

export default GroupTwo