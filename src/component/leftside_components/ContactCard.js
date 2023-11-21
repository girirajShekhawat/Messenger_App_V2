
import React from 'react';
import { data } from '../data';

export default function ContactCard(props) {
  const { handleClickOnContact, item } = props;
  const { name, image, id } = item;
  const lastMsg = props.item.chatlog;
  const length = lastMsg.length;

  return (
    <div className='contactcard' onClick={() => handleClickOnContact(item)}>
      <img src={image} className='dp' alt="Img" />
      <div>
        <div className='name'>
          {name}
        </div>

        <div className='msg'>
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
