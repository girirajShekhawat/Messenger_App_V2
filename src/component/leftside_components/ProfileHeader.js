import React, { useState } from 'react'
import '../.././stylesheet/profileHeader.css';
import { logoutUser } from '../../Api';
import { useAppState } from '../../Contex/stateProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import UpdatePassword from '../UpdatePassword';
import UpdateUser from '../UpdateUser';

export default function ProfileHeader({profile}) {
  const {avatar, name}=profile;
  const [isOpen, setIsopen]=useState(false);
  const [isPasswordUpdatePageOpen, setPasswordUpdatePage]=useState(false);
  const [isUserUpdatePageOpen, setUserUpdatePage]=useState(false)
  const {setUser,user,setLoading,isLoading}=useAppState();
  const navigate=useNavigate();

  function toggleMenu (){
    setIsopen(!isOpen)
  }

  function togglePasswordUpdatePage (){
    setPasswordUpdatePage(!isPasswordUpdatePageOpen)
    setIsopen(false)
  }

  function toggleUserUpdatePage (){
    setUserUpdatePage(!isUserUpdatePageOpen)
    setIsopen(false)
  }

  // this will handle the exit from the update password page ,update user page
  function handleClickOnCross (){
    if(isPasswordUpdatePageOpen){
      setPasswordUpdatePage(false)
    }
    if(isUserUpdatePageOpen){
      setUserUpdatePage(false)
    }
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
    <>
    
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
              <button  onClick={togglePasswordUpdatePage}>
                <span >Update Password</span> 
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>Update Avatar</span>
              </button>
            </li>
            <li>
              <button onClick={toggleUserUpdatePage}>
                <span>Edit User</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={handleLogout}>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </label>
    </div> 

     <div>
     {isPasswordUpdatePageOpen && 
      <div className='z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
        <div className='bg-white p-4 rounded-lg' >
         <UpdatePassword handleClickOnCross={handleClickOnCross}/>
          </div>
      </div>
      }
     </div>
     <div>
      {isUserUpdatePageOpen &&
       <div className='z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50'> 
       <div className='bg-white p-4 rounded-lg'>
        <UpdateUser handleClickOnCross={handleClickOnCross}/>
        </div>
        </div>
        }
     </div>
  
    
       </div>
    
    </>
    
  )
}
