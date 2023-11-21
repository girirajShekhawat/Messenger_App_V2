
import React from 'react';
import { data } from '../data';
import ContactCard from './ContactCard';

export default function ContactList(props) {
  const { profile, handleClickOnContact } = props;
  // getting the contacts array from the user's profile
  const contacts = profile.contacts;

  return (
    <div className='list'>
      {/* Rendering the contact list */}
      {contacts.map((item) => (
        <ContactCard item={item} key={item.id} handleClickOnContact={handleClickOnContact} />
      ))}
    </div>
  );
}
