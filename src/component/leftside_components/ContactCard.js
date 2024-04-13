
import React from 'react';
import { data } from '../data';
import { fetchChat } from '../../Api';
import Loader from '../Loader';
import { useAppState } from '../../Contex/stateProvider';


export default function ContactCard(props) {
  const {isLoading,setLoading}=useAppState();
  const { handleClickOnContact, item  } = props;
  console.log(item[1])
   const { name, avatar, _id } =item[1]
    
  
   
  console.log();

  async function handleClickOnContactCard(){
 
    const data={userId:_id}
    
    setLoading(true);
     const res=await fetchChat(data);
     if(res.success){
    console.log(res);
    handleClickOnContact(item)
    setLoading(false);
    return
     }
    //  show the error msg in the flash msg
    setLoading(false)
  }

  if(isLoading){
    <Loader/>
  }
  return (
    <div className='flex   h-[72px] w-full  bg-[#fff] box-border' onClick={handleClickOnContactCard}>
      
      <div className='flex items-center w-[80px] h-[72px] pl-[11px] pr-[11px]  '>
      <img src={avatar} className='h-[49px] w-[49px] rounded-full bg-auto  ' alt="Img" />
      </div>
       
      <div className='w-full  pr-[15px] border-b-[0.8px] border-solid border-bg-[#eceff1]'>
        <div className=' '>
          {name}
        </div>

      
        </div>
      </div>
   
  );
}



//  { <div className=' '>
  //        {/* writing the last msg */}
    //      {length > 0 ?
      //      <> {lastMsg[length - 1].text} </>
//     :
 //   null} */ 
