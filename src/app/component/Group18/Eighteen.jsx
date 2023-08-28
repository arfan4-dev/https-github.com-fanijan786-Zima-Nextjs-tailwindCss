import React from 'react'
import Image from 'next/image'
import './style.css'
const Eighteen = () => {
  return (
    <div>
     <div className='bg-black h-[500px] flex flex-col justify-center items-center'>
  <div className='relative'>
    <Image id='imgA' src="/images/19White.png" alt="picture" width={500} height={500} className='mt-5 blur-image' style={{filter: 'blur(10px)'}}/>

    <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-around items-center text-white'>
     <p></p>
     <p></p> <br /> <br /><br/><br/><br/><br/>
      <p>INTERESTED IN WORKING WITH US ?</p> <br/><br/>
     <p></p><br/><br/><br/>
      <p>EMAIL</p>
    </div>
  </div>
</div>


    


  </div>
  )

}

export default Eighteen