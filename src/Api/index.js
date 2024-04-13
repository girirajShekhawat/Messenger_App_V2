import { json } from "react-router-dom"
import { tokenName ,url} from "./apiUrl"



const CustomFetch= async (url,{body, ...customConfig})=>{
    const token=window.localStorage.getItem(tokenName)
   
const headers={
    "content-type":"application/json",
    "Accept":"application/json"
}

if(token){
    headers.authorization=`Bearer${token}`
     
}
const config={
    ...customConfig,
    headers:{
        ...headers,
        ...customConfig.headers,
    }
}

if(body){
    config.body=JSON.stringify(body);
}
    try {
        
      const res=  await fetch(url,config);
      console.log("res from the custom fetch ",res)
      const data=await res.json()
        if(data.success){
            return  {
                data:data.data,
                success:true
            }
        }

        throw  new Error(data.msg)
    } catch (error) {
        console.log(error.message);
        return {
            success:false,
            message:error.message,
        }
       
    }
}


// functions for user related fetching 
const signup=(data)=>{
    
    return CustomFetch(url.signup,{
        body:data,
        method:"post",
    })
}

const login= (data)=>{
  return  CustomFetch(url.login,{
body:data,
method:"post"
})
}

const searchUser=(data)=>{
    return CustomFetch(`${url.searchUser}?search=${data}`,{
        method:"get"
    })

}

const logoutUser=(data)=>{
    return CustomFetch(url.logoutUser,{
        method:"post"
    })
}

const updatePassword=(data)=>{
    return CustomFetch(url.passwordUpdate,
        {body:data,
        method:"post"})
}

const updateUser=(data)=>{
    return CustomFetch(url.userUpdate,{
        method:"post",
        body:data
    })
}

// function for the chat related fetching 
const allChatOfUser=(data)=>{
    return CustomFetch(url.allChatFetching,{
        method:"get"
     })
}

const fetchChat=(data)=>{
    console.log(typeof data)
    return CustomFetch(url.getChat,{
        method:"post",
        body:data
    })
        
    
}










export {
    signup,
    login,
    searchUser,
    logoutUser,
    updatePassword,
    updateUser,
    allChatOfUser,
    fetchChat
}