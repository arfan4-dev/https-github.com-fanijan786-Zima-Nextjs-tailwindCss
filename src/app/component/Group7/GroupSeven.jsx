import React from 'react';
import Image from "next/image";
import './style.css';

const GroupSeven = () => {
  return (
    <div className='overflow-hidden '>
      <div className='relative'>
        <Image src='/images/YACHTS.png' alt='picture' width={2200} height={400} id='image-container' />

        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        YACHTS
        </div>
      </div>
    </div>
  );
};

export default GroupSeven;
