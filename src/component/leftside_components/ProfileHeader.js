import React from 'react'

export default function ProfileHeader({profile}) {
   
    const {name,image}=profile;
  return (
    <div className='profileheader'>

<img  src={image} className='profileDp' alt='Dp'/>

<h1 className='dpName'> {name}  </h1>
    </div>
  )
}
