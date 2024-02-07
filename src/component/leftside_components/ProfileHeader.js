import React from 'react'

export default function ProfileHeader({profile}) {
   
    const {name,image}=profile;
  return (
    <div className='h-[59px] px-[16px] py-[10px]   bg-[#f0f2f5]'>

<img  src={image} className='h-[40px] w-[40px] rounded-full' alt='Dp'/>

{/* <h1 className='dpName'> {name}  </h1> */}
    </div>
  )
}
