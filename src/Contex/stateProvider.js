import { useContext,createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext=createContext();
 
const StateProvider=({children})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState();
    const [searchedUserResult,setSearchedUserResult]=useState([]);
    const [isLoading, setLoading]=useState(false)
    const [chat, setChat]=useState([])

    //this will confirm that is user loged in or not 
useEffect(()=>{
    const userInfo= JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  if(!userInfo){
    navigate("/")
  }
},[])
    

    return(
        <ChatContext.Provider value={{user,
                                     setUser,
                                     searchedUserResult,
                                     setSearchedUserResult,
                                     isLoading,
                                     setLoading,
                                    chat,
                                  setChat}}>{children}</ChatContext.Provider>
    )
}


export const useAppState =()=>{
    return useContext(ChatContext)
}

export default StateProvider;