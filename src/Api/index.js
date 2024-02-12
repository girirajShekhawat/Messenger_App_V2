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
    config.body=json.toString(body)
    
}
    try {
      const res=  await fetch(url,config);
      const data=await res.json()
      console.log(data)
      return data;
    } catch (error) {
        console.log(error.message);
        return error.message
    }
}


const signup=(data)=>{
    return CustomFetch(url.signup,{
        data,
        method:"post",
    })
}

const login= (data)=>{
  return  CustomFetch(url.login,{data,
method:"post"
})
}

