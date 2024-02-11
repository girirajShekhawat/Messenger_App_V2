import {createSlice,nanoid } from "@reduxjs/toolkit";


const intialState={
    user:[{ id: 1,
        name: "Ram",
        image: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytnrPXdgowW2KNQCKWKyIOGgkDP-6qC3gpQ&usqp=CAU", 
        }]
}


const userSlice= createSlice({
   name:'user',
   initialState,
   reducers:{
   registerUser:{},
   signInUser:{}
   }
})

export const {registerUser,signInUser}=userSlice.actions

export default userSlice.reducer;