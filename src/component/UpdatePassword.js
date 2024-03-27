 

import React, { useState } from 'react';
import { updatePassword } from '../Api/index';
import { RxCross1 } from "react-icons/rx";

function UpdatePassword(props) {
const intialState={  
    newPassword: "",
   confirmNewPassword: ""
}

    const {handleClickOnCross}=props

    const [password, setPassword] = useState(intialState);

    function handleChange(event) {
        const { name, value } = event.target;
        setPassword({
            ...password,
            [name]: value
        });
    }
 

    async function handlePasswordUpdate() {
        if(!password.newPassword || !password.confirmNewPassword){
            // send a flash message that password is not there 
            console.log("please fill all the filed")
            return ;
        }
        if (password.newPassword !== password.confirmNewPassword) {
            console.log("new password and confirm password are not correct");
            setPassword(intialState)
            return;
        }

        const res = await updatePassword(password);
        if(res.success){
            setPassword(intialState);
            handleClickOnCross();
        }

     // send the flash that there is an error 
     setPassword(intialState);
     return;
        console.log(res);
    }

    return (
        <div className="card"> 
         
            <div className='h-[300px] w-[400px] bg-white p-4 rounded-lg shadow-md'>
             <div className='flex justify-end'>
             <RxCross1 onClick={()=>(handleClickOnCross())}/>
             </div>
            < h1 className='text-center font-extrabold'>Update Your Password</h1>
             
            <div className='mt-[30px]  ml-[30px] '>
                <div className='mt-[5px] '> 
                <label htmlFor="newPassword" className=''>Password</label><br/>
                <input className='mt-[5px]  bg-gray-200 rounded-md py-[5px] px-[10px] focus:outline-none'
                    type='password'
                    placeholder='New password'
                    name='newPassword'
                    id='newPassword'
                    value={password.newPassword}
                    onChange={handleChange}
                />
                </div>
                   <div className='mt-[15px]'> 
                <label htmlFor="confirmNewPassword">Confirm Password</label><br/>
                <input className='mt-[5px] bg-gray-200 rounded-md py-[5px] px-[10px] focus:outline-none'
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmNewPassword'
                    id='confirmNewPassword'
                    value={password.confirmNewPassword}
                    onChange={handleChange}
                />
                </div>
                </div>
             

            <div className="text-left mt-4 ml-[31px]">
                <button className="bg-[#00a884]   text-white font-bold py-1 px-3 rounded" onClick={handlePasswordUpdate}>
                    Update
                </button>
            </div>
            </div>
        </div>
    );
}

export default UpdatePassword;
















// import React, { useState } from 'react';
// import {updatePassword} from '../Api/index'

// function UpdatePassword(props) {
//     const [password, setPassword]=useState({
//         newPassword:"",
//         confirmNewPassword:""
        
//     })

//     function handleChange(event){
//  const {name,value}=event.target;
    
//        setPassword({
//         ...password,
//         [name]:value
//        })
//     }

//    async function handlePasswordUpdate (){
//         if(password.newPassword !== password.confirmNewPassword){
//             //send a flash msg for this 
//             console.log("new password and confirm password is not correct")
//             return ;  
//         }

//         const res = await updatePassword(password);

//         console.log(res)
//     }

    
//     return (
//         <div>
//             <div className='h-[300px] w-[400px] bg-gray-100 '>
//             <label htmlFor="newPassword">New Password</label>
//             <input type='password' placeholder='New password' name='newPassword' id='newPassword' value={password.newPassword}
//              onChange={handleChange}/>

//             <label htmlFor="confirmNewPassword">Confirm New Password</label>
//             <input type='password' placeholder='Confirm Password' name='confirmNewPassword' id='newPconfirmNewPasswordassword' 
//             value={password.confirmNewPassword}
//             onChange={handleChange} />

//             </div>

//             <div>
//                 <button onClick={handlePasswordUpdate}>Update</button>
//             </div>
           

            
            
            
//         </div>
//     );
// }

// export default UpdatePassword;