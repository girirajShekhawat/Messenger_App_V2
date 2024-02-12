import React from 'react';
import { useForm } from 'react-hook-form';
 
import { useDispatch } from 'react-redux';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();  
    const dispatch = useDispatch();
 

    const onSubmit = (data) => {
        console.log(data);
       
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='file' accept='image/x-png,image/gif,image/jpeg'{...register("file")} />

                <input
                    type='text'
                    placeholder="Name"
                    {...register("name", {
                        required: true,
                        pattern: {
                            value: /[a-zA-Z\s]{3,}/, // Removed backticks, simplified regex
                            message: "Enter a valid name"
                        },
                    })}
                />
                {errors.name && <p>{errors.name.message}</p>}

                <input
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
                {errors.username && <p>{errors.username.message}</p>}

                <input
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
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    type='password'
                    placeholder='Password'
                    {...register("password", {
                        required: true
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
