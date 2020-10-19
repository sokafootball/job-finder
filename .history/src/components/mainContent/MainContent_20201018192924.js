import React, {useState, useEffect} from 'react';
import './MainContent.css';
import SearchBar from "../searchBar/SearchBar"
import Jobs from "../jobs/Jobs"

function MainContent(){

  const endPoint = "https://jobs.github.com/positions.json?

  const[data, setData] = useState("")
  const[keyword, setKeyword] = useState("")


//TODO: a function that gets data from the api and save it in data everytime the value of the searchbar changes

  function getData(){
    fetch("https://jobs.github.com/positions.json?search")
    .then(response => response.json())
    .then(data => setData(data))
  }

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
