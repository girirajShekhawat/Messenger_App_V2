import React from 'react';
import { useState } from 'react';
import ProfileHeader from '../component/leftside_components/ProfileHeader';
import SearchBar from '../component/leftside_components/SearchBar';
import SearchResultRender from '../component/leftside_components/SearchResultRender';
import ContactList from '../component/leftside_components/ContactList';
import RightComponent from '../component/Rightside_components/ChatSection';
import { data } from '../component/data';
import { useAppState } from '../Contex/stateProvider';
function Home() {
    const [searchContact, setSearchContact] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [filteredContact, setFilteredContact] = useState([]);
    const [showRightSide, setRightSide] = useState(false);
    const [selectedContact, setSelectedContact] = useState({});
    const {user}=useAppState();
     console.log(user)
      // users data
  const { profile } = data;
  // all the contacts of the user
  const contacts = profile.contacts;

  // handling the search name
  const handleSearch = (event) => {
    //setSearchContact(event.target.value);
   // console.log(event.target.value);
    handleSearchResult();
  };

  // handling the search result
  const handleSearchResult = (searcheduser) => {
    console.log("this is from the setfiltered contacts" ,typeof searcheduser , searcheduser)
   // setFilteredContact(searcheduser);
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
        
        <div>
            <div className=" flex 2xl:justify-center ">
     
     {/* <span className="2xl:bg-gradient-to-b from-[#00a884] from-10% to-[#e1e1de] to-10% h-screen w-screen z-0"></span>   */}
     <div className="z-0 flex flex-col  ">
     <span className="block bg-[#00a884] h-[127px] w-screen "></span>
     <span className="block  bg-[#e1e1de]    h-screen w-screen "></span>
     </div>
      
      
    <div className="flex z-10 absolute 2xl:my-[19px] w-[1500px]  ">
      <div className="min-w-[300px] w-[467px]">
        <ProfileHeader profile={user} />
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
      </div>  
        </div>
    );
}

export default Home;