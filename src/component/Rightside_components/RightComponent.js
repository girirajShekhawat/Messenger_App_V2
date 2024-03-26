import React, { useEffect } from 'react'
import ContactHeader from './ContactHeader'
import ChatSection from './ChatSection'
 


// by this component we will manage tha whole right side functionality(chat functionality)
export default function RightComponent(props) {
    const {contact,userDp}=props;
const {name,image}=props.contact;
useEffect(()=>{
  console.log("this is from the right side")
})
 
  return (

<div>
  <p>this is from the right component</p>
</div>
  )
}

//<ContactHeader name={name} image={image}/>
    
//<ChatSection contact={contact} userDp={userDp} />
