import React, { useState } from 'react'

export default function SearchBar(props) {
   
    const {handleSearch ,searchContact}=props
  return (
    <div  >
        <form >
            <input type='text' placeholder=' Search By Name' id='name' name='name' className='searchbox'
            value={ searchContact}
            onChange={(event)=>handleSearch(event)}
            />
        </form>
    </div>
  )
}
