import React, { useState } from 'react'
import '../.././stylesheet/profileHeader.css'

export default function ProfileHeader({profile}) {
  const {avatar, name}=profile;
  const [isOpen, setIsopen]=useState(false);
  
  function toggleMenu (){
    console.log(isOpen)
    setIsopen(!isOpen)
  }
  
  return (
    <div className='flex justify-between h-[59px]  bg-[#f0f2f5]' >
 <div className='  px-[16px] py-[10px]   '>

<img  src={avatar} className='h-[40px] w-[40px] rounded-full' alt='Dp'/>

<h1 className='dpName'> {name}  </h1> 
    </div>
    <div className='dropdown'>
    <label className="popup">
      <input type="checkbox" checked={isOpen}   />
      <div className="burger" tabIndex="0" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <nav className="popup-window">
          <legend>Actions</legend>
          <ul>
            <li>
              <button>
                <span>Update Password</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>Update Avatar</span>
              </button>
            </li>
            <li>
              <button>
                <span>Edit User</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </label>
    </div>
    </div>
    
  )
}
