import React, { useState } from 'react'

export default function MessageInputBox({handleSendMsg}) {
    const [message,setMessage]=useState("");

    // this is for  handling the message writing 
    const handleMessage=(event)=>{
     const msg=event.target.value
     setMessage(msg)
    }

  return (
    <div className='message-input-box'>
        <form>
            <input  type='text' placeholder='Type your massage here'
            value={message}
            onChange={(e)=>handleMessage(e)}
            />
            <button className='send-button' onClick={(e)=>handleSendMsg(e,message)}>send</button>
        </form>
    </div>
  )
}
