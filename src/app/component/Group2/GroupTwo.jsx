import Image from 'next/image'
import React from 'react'
import './style.css'
const GroupTwo = () => {
  return (
    <div>
        <div >
           <div id='first' className='flex justify-around  bg-black text-white items-center h-[500px] mt-5 sm:justify-around md:justify-around'>
           <Image id='firstA' src='/images/19White.png'  alt='Zimo logo' width={120} height={170} />
           <div>
           <p id='firstB' className='text-center text-lg'>We are the global platform. <br/> 
           <span>Services in over one hundred and twenty countries.</span></p>
<p></p>
           </div>
            

           </div>
           
        </div>
    </div>
  )
}

export default GroupTwo