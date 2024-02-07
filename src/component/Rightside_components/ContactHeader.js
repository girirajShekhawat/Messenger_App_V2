import React from 'react'

export default function ContactHeader({name,image}) {
  return (
    <div className='flex flex-row grow bg-[#f0f2f5]'>
    
    <div className='h-[59px] w-[1px] bg-[#d1d7db]' ></div>

    <div className='flex h-[59px] px-[16px] py-[10px] bg-[#f0f2f5]'>
<div>
    <img className='h-[40px] w-[40px] rounded-full' src={image} alt='Display pic'/>
</div>
{/* <h3 className=''>{name}</h3> */}
    </div>
    </div>
  )
}
