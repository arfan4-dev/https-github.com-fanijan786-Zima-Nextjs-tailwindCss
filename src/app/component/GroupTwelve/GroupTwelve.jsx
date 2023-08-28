import React from 'react'
import Image from "next/image";
import './style.css'
// import Img from ''
const GroupTwelve = () => {
  return (
    <div className='overflow-hidden '>
        <div className="relative">
        <Image src="/images/TRAVEL THE WORLD.png" alt="picture" width={2200} height={400} id='image-container'/>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">TRAVEL THE WORLD
</div>
        </div>

    </div>
  )
}

export default GroupTwelve