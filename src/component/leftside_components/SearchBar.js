import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { searchUser } from '../../Api';
import { useAppState } from '../../Contex/stateProvider';

export default function SearchBar(props) {
  const {handleSearch ,searchContact}=props
   const [search,setSearch]=useState("");
   const{setSearchedUserResult}=useAppState();

   async function searchUserInDb(){
    const data= await searchUser(search);
     if(data){
      console.log("this is user search result" ,Array.isArray(data.data.users), data.data.users)
     setSearchedUserResult(data.data.users)
      handleSearch(data.data.users)
     }
  }
 
    const handleUserSearch=(event)=>{
      const value=event.target.value
      setSearch(value)
      searchUserInDb()
     }
 
  return (
    <>
   
    <div className=' flex flex-row h-[49px] bg-white pl-[12px] pr-[20px] items-center drop-shadow-[0_0px_1px_rgba(0,0,0,0.07)] ' >
        <form className='flex h-[35px] bg-[#f0f2f5]  w-full  pr-[32px] items-center rounded-[8px]'>
            <IoMdSearch className='h-[24px] w-[24px] ml-[15px] mr-[27px] text-gray-500'/>
            <input type='text' placeholder=' Search By Name' id='name' name='name' className='  bg-[#f0f2f5] focus:outline-none w-full'
            value={search}
            onChange={handleUserSearch}
            />
        </form>
        
         
    </div>
    <div className='w-full h-[1.73px] bg-[#e9edef]  '></div>
    </>
  )
}






/*<div className=' flex flex-row h-[49px] bg-white pl-[12px] pr-[20px] items-center drop-shadow-[0_0px_1px_rgba(0,0,0,0.07)] ' >
<form className='flex h-[35px] bg-[#f0f2f5]  w-full  pr-[32px] items-center rounded-[8px]'>
    <IoMdSearch className='h-[24px] w-[24px] ml-[15px] mr-[27px] text-gray-500'/>
    <input type='text' placeholder=' Search By Name' id='name' name='name' className='  bg-[#f0f2f5] focus:outline-none w-full'
    value={ searchContact}
    onChange={(event)=>handleSearch(event)}
    />
</form>*/