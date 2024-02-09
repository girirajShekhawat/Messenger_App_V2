import React from 'react';

function Signup() {
    return (
        <div>
           <form>
           <input type='file' placeholder='Avatar'/>
            <input type='text' placeholder='Name' pattern='[a-z" "A-Z]{3,}' required/>
            <input type='text' placeholder='UserName' pattern='[a-zA-Z0-9_-]{3,}' required />
            <input type='email' placeholder='Email' required/>
            <input type='password' placeholder='password' required />
            <button type='submit' >SignUp</button>
           </form>
        </div>
    );
}

export default Signup;