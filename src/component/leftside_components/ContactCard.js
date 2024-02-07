
import React from 'react';
import { data } from '../data';

export default function ContactCard(props) {
  const { handleClickOnContact, item } = props;
  const { name, image, id } = item;
  const lastMsg = props.item.chatlog;
  const length = lastMsg.length;

  return (
    <div className='flex   h-[72px] w-full  bg-[#fff] box-border' onClick={() => handleClickOnContact(item)}>
      
      <div className='flex items-center w-[80px] h-[72px] pl-[11px] pr-[11px]  '>
      <img src={image} className='h-[49px] w-[49px] rounded-full bg-auto  ' alt="Img" />
      </div>
       
      <div className='w-full  pr-[15px] border-b-[0.8px] border-solid border-bg-[#eceff1]'>
        <div className=' '>
          {name}
        </div>

        <div className=' '>
          {/* writing the last msg */}
          {length > 0 ?
            <> {lastMsg[length - 1].text} </>
            :
            null}
        </div>
      </div>
    </div>
  );
}
