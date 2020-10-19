import React, {useState, useEffect} from 'react';
import './MainContent.css';
import SearchBar from "../searchBar/SearchBar"
import Jobs from "../jobs/Jobs"

function MainContent(){

  const[data, setData] = useState("")
  const[keyword, setKeyword] = useState("")


//TODO: a function that gets data from the api and save it in data everytime the value of the earchbar changes

  getData(){
    fetch("https://jobs.github.com/positions.json?search=node")
    .then(response => response.json())
    .then(data => console.log(data))
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
