import React from 'react';
import Image from 'next/image';
import './style.css'
const GroupSix = () => {
  return (
    <div className='overflow-hidden'>
      <div className='relative w-screen'>
        <Image src='/images/car.png' alt='picture' width={1500} height={400} />

        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center '>
          CAR
        </div>

        <Image
        id='img'
          src='/images/carChild.png'
          alt='picture'
          width={400}
          height={400}
          className='absolute right-0 bottom-0 rounded mr-5 xs:w-[150px] xs:h-[100px] sm:w-[300px] sm:h-[200px]'
        />
      </div>
    </div>
  );
};

export default GroupSix;
