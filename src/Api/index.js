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
    config.body=JSON.stringify(body)
     
    
}
    try {
      const res=  await fetch(url,config);
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

export {
    signup,
    login
}