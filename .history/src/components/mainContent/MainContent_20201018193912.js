import React, {useState, useEffect} from 'react';
import './MainContent.css';
import SearchBar from "../searchBar/SearchBar"
import Jobs from "../jobs/Jobs"

function MainContent(){

  const baseUrl = "https://jobs.github.com/positions.json?"
  let fullUrl = baseUrl

  const[data, setData] = useState("")
  const[keyword, setKeyword] = useState("node")


//TODO: a function that gets data from the api and save it in data everytime the value of the searchbar changes

  function getData(){
    fetch(fullUrl)
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
