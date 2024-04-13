
import React from 'react';
import { data } from '../data';
import ContactCard from './ContactCard';
import { useAppState } from '../../Contex/stateProvider';

export default function ContactList(props) {
  const {chat}=useAppState()
  const { profile, handleClickOnContact } = props;
  // getting the contacts array from the user's profile
  const contacts = chat;
 
  return (
    <div className='list'>
      {/* Rendering the contact list */}
      {contacts.map((item) => (
        <ContactCard item={item.users} key={item._id}  handleClickOnContact={handleClickOnContact} />
      ))}
    </div>
  );
}
