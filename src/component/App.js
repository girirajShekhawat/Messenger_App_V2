
import React from "react";
 
 import { BrowserRouter ,Route ,Routes} from "react-router-dom";
 
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

function App() {
   

  return (
   
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<SignIn/>}/>
  <Route path="signup" element={<Signup/>}/>
  <Route path="home" element={<Home/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;




















/* <div className=" flex 2xl:justify-center ">
     
     <span className="2xl:bg-gradient-to-b from-[#00a884] from-10% to-[#e1e1de] to-10% h-screen w-screen z-0"></span>  
     <div className="z-0 flex flex-col  ">
     <span className="block bg-[#00a884] h-[127px] w-screen "></span>
     <span className="block  bg-[#e1e1de]    h-screen w-screen "></span>
     </div>
      
      
    <div className="flex z-10 absolute 2xl:my-[19px] w-[1500px]  ">
      <div className="min-w-[300px] w-[467px]">
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
      </div>  
      */