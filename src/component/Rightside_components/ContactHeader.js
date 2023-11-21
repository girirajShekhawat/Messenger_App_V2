import React from 'react'

export default function ContactHeader({name,image}) {
  return (
    <div className='rightprofileheader'>
<div>
    <img className='profileDp' src={image} alt='Display pic'/>
</div>
<h3 className='dpName'>{name}</h3>
    </div>
  )
}
