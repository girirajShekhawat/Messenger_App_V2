import React from 'react'

export default function RightSideChatBubble(props) {
  const {img,name}=props
  const {timestamp ,text}=props.item

  return (
    <div className='right-bubble '> 
       
           
        
<img className='dp' src={img} alt='dp'/>
<div>
<p>{name}</p>
<p>{text}</p>
<p>{timestamp}</p>
</div>
</div>
 
   
  )
}
