import Image from 'next/image'
import React from 'react'
import './style.css'
const Seventeen = () => {
  return (
    <div className='flex justify-evenly h-[500px] '>
        <div>
            <Image  className='img' src='/images/phone.png' alt='' width={200} height={300} id='img1'/>
        </div>

        <div className='flex flex-col justify-around items-center '>
            <div className=' p-5' style={{border:"1px solid brown", borderRadius:'20px'}}>
            <Image src='/images/logo.png' alt='' width={50} height={50} id='img2'/>
            </div>
            <div>
                <p className='text-[30px]'>DOWNLOAD</p>
                <p className='text-center'>OUR APP</p>
            </div>
            <div>
                <Image src='/images/google.png' alt='' width={100} height={100} id='img3'/>
            </div>
            <div className='text-center'> 
                <p style={{color:'brown'}}>Get the Zimo App on a phone or tablet</p>
                <p style={{color:'brown'}}>To install ZIMO, follow the link for your smartPhone on tablet</p>
            </div>
        </div>
        <div className=''>
            <Image  className='img'  src='/images/phone.png' alt='' width={200} height={300} id='img4'/>
        </div>

        <div></div>

    </div>
  )
}

export default Seventeen