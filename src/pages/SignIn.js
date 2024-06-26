 
import React, { useState } from 'react';
import { useAppState } from '../Contex/stateProvider'; 
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 
import { login,allChatOfUser} from '../Api'; 
import { tokenName } from '../Api/apiUrl';
 
function SignIn(props) {
    const navigate = useNavigate();
   const {setUser,user,setLoading,isLoading,setChat,chat}=useAppState();
    const [error, setError] = useState("");
    const { register, handleSubmit,reset, formState} = useForm();
    const {errors}=formState
    const handleClick=()=>{
        navigate("/signup")
    }

    const onSubmit =async (data) => {
        
    const res=await login(data)
      if(res.success){
//setting the user in localStorage and setting it up in the state also
    setUser(res?.data.user)
    localStorage.setItem("userInfo",JSON.stringify(res.data.user))
    localStorage.setItem(tokenName,res.data.accessToken);
    fetchAlltheChats()
        reset();
        navigate("/home");
        setLoading(false);
      }
    };


//fetching all the  chats for  the logined user 
    async function fetchAlltheChats(){

       const res= await allChatOfUser();
       if(res.success){
        const chats= res?.data.chat
        console.log(chats)
       setChat([...chats]);
       
       }
 
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gradient-to-r from-[#00a884] from-50% to-[#e1e1de] to-10% '>
            <div className='bg-white p-8 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <input 
                            className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-[#00a884]' 
                            type='email' 
                            placeholder='Email' 
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Email address must be a valid email address"
                                }
                            })} 
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                    </div>
                    <div className='mb-4'>
                        <input 
                            className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-[#00a884]' 
                            type='password' 
                            placeholder='Password' 
                            {...register("password", { required: true })} 
                        />
                        {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
                    </div>
                    <button 
                        type='submit' 
                        className='bg-[#00a884] text-white rounded-md py-2 px-4    focus:outline-none '
                    >
                        Sign In
                    </button>
                </form>
                <div className='mt-4'>
                    <p>Don't have an account? <button onClick={handleClick} className='text-blue-500'>Register</button></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;



