import React from 'react'
import Image from "next/image";
import './style.css'
// import Img from ''
const GroupTen = () => {
  return (
    <div className='overflow-hidden '>
        <div className="relative w-screen">
        <Image src="/images/PRIVATE ISLANDS.png" alt="picture" width={2500} height={400} id='image-container'/>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">PRIVATE ISLANDS</div>
        </div>

    </div>
  )
}

export default GroupTen