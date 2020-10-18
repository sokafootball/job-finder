import React from 'react';
import './MainContent.css';
import SearchBar from "../searchBar/SearchBar"
import Jobs from "../jobs/Jobs.js"

function MainContent(){
  return (
    <div>
      <SearchBar/>
      <Jobs/>
    </div>
  )
}

export default MainContent
