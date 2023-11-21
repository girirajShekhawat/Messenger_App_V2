import React from 'react'

export default function LeftSideChatBubble(props) {
const {img,name}=props
  const { timestamp ,text}=props.item


  return (
    <div className='left-bubble '>
       
<img className='dp'  src={img} alt='dp'/>
<div>
<p>{name}</p>
<p>{text}</p>
<p>{timestamp}</p>
</div>
 

    </div>
  )
}
