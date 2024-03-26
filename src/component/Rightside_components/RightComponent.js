import React from 'react'
import ContactHeader from './ContactHeader'
import ChatSection from './ChatSection'
 


// by this component we will manage tha whole right side functionality(chat functionality)
export default function RightComponent(props) {
    const {contact,userDp}=props;
const {name,image}=props.contact;
console.log("this is from the right side")
  return (

<div>
   
  
</div>
  )
}

//<ContactHeader name={name} image={image}/>
    
//<ChatSection contact={contact} userDp={userDp} />
