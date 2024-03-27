import React, { useState } from 'react'
import '../.././stylesheet/profileHeader.css';
import { logoutUser } from '../../Api';
import { useAppState } from '../../Contex/stateProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import UpdatePassword from '../UpdatePassword';

export default function ProfileHeader({profile}) {
  const {avatar, name}=profile;
  const [isOpen, setIsopen]=useState(false);
  const [isPopupOpen, setPopupOpen]=useState(false);
  const {setUser,user,setLoading,isLoading}=useAppState();
  const navigate=useNavigate();

  function toggleMenu (){
    setIsopen(!isOpen)
  }

  function togglePopup (){
    setPopupOpen(!isPopupOpen)
  }

  function handleClickOnCross (){
    console.log("hello from the handleClickOnCross")
    setPopupOpen(false)
  }
  
// handling the logout functionality
async function handleLogout(){
  setLoading(true)
   const res= await logoutUser();
   if(res.success){
    setLoading(false)
       localStorage.clear();
        setUser();
        navigate("/")
       console.log("user is logout ")
   }
}


 


if(isLoading){
  return(
    <Loader/>
  )
}
  
  return (
    <div className='flex justify-between h-[59px]  bg-[#f0f2f5] ' >
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
                <span onClick={togglePopup}>Update Password</span> 
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
                <span onClick={handleLogout}>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </label>
    </div> 
    {isPopupOpen && 
      <div className='z-10'>
        <div className='flex justify-center' >
         <UpdatePassword handleClickOnCross={handleClickOnCross}/>
          </div>
      </div>
      }
    </div>
    
  )
}
