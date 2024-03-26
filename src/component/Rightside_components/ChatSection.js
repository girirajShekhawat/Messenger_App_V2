
import React, { useEffect, useState } from 'react';
import LeftSideChatBubble from './LeftSideChatBubble';
import RightSideChatBubble from './RightSideChatBubble';
import MessageInputBox from './MessageInputBox';

export default function ChatSection(props) {
  const [chat, setChat] = useState([]);
  const { contact, userDp } = props;
  const { image } = contact;

  // getting all the chats.
  const chatlog = contact.chatlog;

  useEffect(() => {
    setChat(chatlog);
  }, [props]);

 

  // function for realtime timestamps for new message
  let currenttime;

  const realtimeTimestamps = () => {
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let ampm = "AM";

    hour >= 12 ? (ampm = "PM") : (ampm = "AM");

    hour = (hour % 12) || 12;
    currenttime = `${padZero(hour)}:${padZero(minutes)} ${ampm}`;
  };

  // correct formatting of the time
  const padZero = (time) => {
    return time < 10 ? '0' + time : time;
  };

  setInterval(realtimeTimestamps, 1000);

  // handling message sending
  let newMsg;

  const handleSendMsg = (event, msg) => {
    event.preventDefault();
    if (msg === '') {
      return;
    } else {
      newMsg = {
        text: msg,
        timestamp: currenttime,
        sender: 'me',
        message_id: chat.length + 1,
      };

      setChat([...chat, newMsg]);
    }
  };

  return (
    <div className='ChatSection'>
      
      <MessageInputBox handleSendMsg={handleSendMsg} />
    </div>
  );
}



  /*<div className='message-box'>
        {chat.length > 0 ? (
          // then we will show the messages
          <>
            {chat.map((item) =>
              item.sender === 'me' ? (
                <RightSideChatBubble item={item} key={item.message_id} img={userDp} name={'Ram'} />
              ) : (
                <LeftSideChatBubble item={item} key={item.message_id} img={image} name={contact.name} />
              )
            )}
          </>
        ) : (
          <>
            <div></div>
          </>
        )}
      </div>*/