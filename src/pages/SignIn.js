import React from 'react';

function SignIn(props) {
    return (
        <div>
            <form>
                <input type='text' placeholder='Email' required/>
                <input type='password' placeholder='password' required/>
                <button type='submit'>SignIn</button>
            </form>
        </div>
    );
}

export default SignIn;