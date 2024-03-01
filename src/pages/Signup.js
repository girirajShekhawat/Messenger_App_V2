 






import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../Api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword]=useState(false)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const onSubmit = async (data) => {
         if(data.password!=data.confirmPassword){
            console.log("password is not same")
            setError(true)
            return;
         }
        setError(false);
        const response = await signup(data);
        if (response.success) {
            // send a flash message of successfull
            reset()
            navigation("/");
        } else {
            setError(true);
            reset()
        }
    }


    function togglePasswordVisibility (){
        setShowPassword(!showPassword)
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#00a884] from-50% to-[#e1e1de] to-10% ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                {error && <p className="text-red-500 mb-4">Something went wrong</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="border border-gray-300 rounded-md   p-2 mb-4 w-full focus:outline-none focus:border-[#00a884]"
                        type='file'
                        accept='image/x-png,image/gif,image/jpeg'
                        {...register("file")}
                    />

                    <input
                        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:border-[#00a884]"
                        type='text'
                        placeholder="Name"
                        {...register("name", {
                            required: true,
                            pattern: {
                                value: /^(?![\d\s])[a-zA-Z\s]{3,}/,
                                message: "Enter a valid name"
                            },
                        })}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <input
                        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:border-[#00a884]"
                        type='text'
                        placeholder="Username"
                        {...register("username", {
                            required: true,
                            pattern: {
                                value: /[a-zA-Z0-9_-]{3,}/,
                                message: "Write a valid username"
                            }
                        })}
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}

                    <input
                        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:border-[#00a884]"
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
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div   className="relative mb-4">
                   <input
                       className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-[#00a884]"
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        {...register("password", {
                            required: true
                        })}
                         
                    />
                    <button type="button"   className="absolute top-0 right-0 mt-2 mr-2" onClick={togglePasswordVisibility} >{showPassword ? "Hide" :"Show" }</button>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                   </div>

                    
                   <input
                     className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:border-[#00a884]"
                        type='password'
                        placeholder='Confirm Password'
                        {...register("confirmPassword", {
                            required: true
                        })}
                         
                    />
                     
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                  

                    <button
                        className="bg-[#00a884] text-white rounded-md py-2 px-4   focus:outline-none "
                        type='submit'
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

















// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { signup } from '../Api';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//     const [error, setError]=useState(false)
//     const { register, handleSubmit, formState: { errors  } } = useForm();  
//     const dispatch = useDispatch(); 
//     const navigation=useNavigate();

//     const onSubmit = async (data) => {
//         setError(false)
//         const response=await signup(data)
//       if(response.success){
//         // send a flash message of successfull
//          navigation("/")
//       }
//        setError(true)
//     }

//     if(error){
//         <p>some thing went wrong</p>
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input type='file' accept='image/x-png,image/gif,image/jpeg'{...register("file")} />

//                 <input
//                     type='text'
//                     placeholder="Name"
//                     {...register("name", {
//                         required: true,
//                         pattern: {
//                             value: /[a-zA-Z\s]{3,}/, // Removed backticks, simplified regex
//                             message: "Enter a valid name"
//                         },
//                     })}
//                 />
//                 {errors.name && <p>{errors.name.message}</p>}

//                 <input
//                     type='text'
//                     placeholder="Username"
//                     {...register("username", {
//                         required: true,
//                         pattern: {
//                             value: /[a-zA-Z0-9_-]{3,}/,
//                             message: "Write a valid username"
//                         }
//                     })}
//                 />
//                 {errors.username && <p>{errors.username.message}</p>}

//                 <input
//                     type='email'
//                     placeholder='Email'
//                     {...register("email", {
//                         required: true,
//                         pattern: {
//                             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                             message: "Email address must be a valid email address"
//                         }
//                     })}
//                 />
//                 {errors.email && <p>{errors.email.message}</p>}

//                 <input
//                     type='password'
//                     placeholder='Password'
//                     {...register("password", {
//                         required: true
//                     })}
//                 />
//                 {errors.password && <p>{errors.password.message}</p>}

//                 <button type='submit'>Sign Up</button>
//             </form>
//         </div>
//     );
// }

// export default Signup;

