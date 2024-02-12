import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 
 

function SignIn(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const { register, handleSubmit, formState} = useForm();
    const {errors}=formState
    

    const onSubmit =async (data) => {
     
       
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email address must be a valid email address"
                    }
                })} />
                {errors.email && <p>{errors.email.message}</p>}
                <input type='password' {...register("password", { required: true })} />
                {errors.password && <p>Password is required</p>}
                <button type='submit'>SignIn</button>
            </form>
        </div>
    );
}

export default SignIn;