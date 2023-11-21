
import React, { useState } from "react";
import { data } from "./data";
import ContactList from "./leftside_components/ContactList";
import ProfileHeader from "./leftside_components/ProfileHeader";
import SearchBar from "./leftside_components/SearchBar";
import SearchResultRender from "./leftside_components/SearchResultRender";
import RightComponent from "./Rightside_components/RightComponent";

function App() {
  const [searchContact, setSearchContact] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [filteredContact, setFilteredContact] = useState([]);
  const [showRightSide, setRightSide] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  
  // users data
  const { profile } = data;
  // all the contacts of the user
  const contacts = profile.contacts;

  // handling the search name
  const handleSearch = (event) => {
    setSearchContact(event.target.value);
    console.log(event.target.value);
    handleSearchResult();
  };

  // handling the search result
  const handleSearchResult = () => {
    // filtering out the contacts according to the search
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchContact.toLowerCase())
    );
    setFilteredContact(filteredContacts);
    setShowSearchResult(true);
  };

  // handling the click on contactCard
  const handleClickOnContact = (contact) => {
    setRightSide(true);
    setSelectedContact(contact);
  };

  // handle Search Result Click
  const handleSearchResultClick = (contact) => {
    setRightSide(true);
    setSelectedContact(contact);
  };

  return (
    <div className="app">
      <div className="leftside">
        <ProfileHeader profile={profile} />
        <SearchBar handleSearch={handleSearch} searchContact={searchContact} />
        {showSearchResult ? (
          <>
            <SearchResultRender
              filteredContact={filteredContact}
              handleSearchResultClick={handleSearchResultClick}
            />
          </>
        ) : (
          <>
            <ContactList
              profile={profile}
              handleClickOnContact={handleClickOnContact}
            />
          </>
        )}
      </div>
      {showRightSide ? (
        <div className="rightSide">
          <RightComponent contact={selectedContact} userDp={profile.image} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
