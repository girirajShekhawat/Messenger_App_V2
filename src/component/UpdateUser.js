import React, { useState } from 'react';
import { } from '../Api/index';
import { RxCross1 } from "react-icons/rx";
import { useAppState } from '../Contex/stateProvider';
import { updateUser } from '../Api/index';
import { json } from 'react-router-dom';

function UpdateUser(props) {
    const {user,setUser}=useAppState();

    const intialState={  
        name:"",
        email:""
    }
    const {handleClickOnCross}=props

    const [userDetail, setUserDetail] = useState(intialState);

    function handleChange(event) {
        const { name, value } = event.target;
        setUserDetail({
            ...userDetail,
            [name]: value
        });
    }
 

    async function handleUpdate(event) {
        event.preventDefault();
        if(!userDetail.email || !userDetail.name){
            // send a flash message that user name or email is not there 
            console.log("please fill all the filed")
            return ;
        }

        if(userDetail.name===user.name && userDetail.email===user.email){
            // send a flash msg that edit any of the name or email
            console.log("please fill all the field");
            return;
        }
        

        const res = await  updateUser(userDetail);

        if(res.success){
             // updating the user state 
             user.name=userDetail.name;
             user.email=userDetail.email;

              setUser(user)
              //updating the user in localStorage 
              localStorage.setItem("userInfo",JSON.stringify(user))
             setUserDetail(intialState);
              handleClickOnCross();
        }

     // send the flash that there is an error 
     
     return;
      
    }

    return (
        <div className="card"> 
         
            <div className='h-[300px] w-[400px] bg-white p-4 rounded-lg shadow-md'>
             <div className='flex justify-end'>
             <RxCross1 onClick={()=>(handleClickOnCross())}/>
             </div>
            < h1 className='text-center font-extrabold'>Update Your Details</h1>
            <form onSubmit={handleUpdate}>
            <div className='mt-[30px]  ml-[30px] '>
                
                <div className='mt-[5px] '> 
                <label htmlFor="name" className=''>Name</label><br/>
                <input className='mt-[5px]  bg-gray-200 rounded-md py-[5px] px-[10px] focus:outline-none'
                    type='text'
                    placeholder={user.name}
                    name='name'
                    id='name'
                    pattern='^[A-Za-z\s]{3,}$'
                    value={ userDetail.name}
                    onChange={handleChange}
                />
                </div>
                   <div className='mt-[15px]'> 
                <label htmlFor="email">Email</label><br/>
                <input className='mt-[5px] bg-gray-200 rounded-md py-[5px] px-[10px] focus:outline-none'
                    type='email'
                    placeholder={user.email}
                    name='email'
                    id='email'
                    value={ userDetail.email}
                    onChange={handleChange}
                />
                </div>
                
                </div>
             

            <div className="text-left mt-4 ml-[31px]">
                <button className="bg-[#00a884]   text-white font-bold py-1 px-3 rounded" type='submit'  >
                    Update
                </button>
                
            </div>
            </form>
            </div>
        </div>
    );
}

export default UpdateUser;