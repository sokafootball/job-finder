import React, {useState, useEffect} from 'react';
import './MainContent.css';
import SearchBar from "../searchBar/SearchBar"
import Jobs from "../jobs/Jobs"

function MainContent(){

  const[data, setData] = useState("data")
  const[keyword, setKeyword] = useState("keyword")

  function handleKeywordChange(newValue){
    setKeyword(newValue)
  }

  return (
    <div>
      <SearchBar/>
      <Jobs/>
    </div>
  )
}

export default MainContent
