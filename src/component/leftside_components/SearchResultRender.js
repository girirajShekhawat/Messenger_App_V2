
import React from 'react';

export default function SearchResultRender({ filteredContact, handleSearchResultClick }) {

  console.log(filteredContact);
  console.log(typeof filteredContact);

  return (
    <div className='list'>
      {filteredContact.map((contact) => (
        <div className='contactcard' onClick={() => handleSearchResultClick(contact)}>
          <div>
            <img src={contact.image} className='dp' alt='profileImage' />
          </div>
          <div>
            <p className='name'> {contact.name} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
