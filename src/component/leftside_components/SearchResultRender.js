import { useAppState } from '../../Contex/stateProvider';
import React, { useEffect } from 'react';
import ContactCard from './ContactCard';

export default function SearchResultRender({ filteredContact, handleSearchResultClick }) {
const {searchedUserResult}=useAppState();
console.log(searchedUserResult)
 useEffect(()=>{
  console.log("this is from the useEffect hook",searchedUserResult)
 },[searchedUserResult])

  return (
    <div className='list'>
      {searchedUserResult.map((contact) => (
         <ContactCard item={contact}/>
      ))}
    </div>
  );
}




/*  <div className='contactcard' onClick={() => handleSearchResultClick(contact)}>
<div>
<img src={contact.avatar} className='dp' alt='profileImage' />
</div>
<div>
<p className='name'> {contact.name} </p>
</div>
</div>*/