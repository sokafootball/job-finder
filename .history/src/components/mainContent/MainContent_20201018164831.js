import React, {useState, useEffect} from 'react';
import './MainContent.css';
import SearchBar from "../searchBar/SearchBar"
import Jobs from "../jobs/Jobs"

function MainContent(){

  const[data, setData] = useState("")
  const[keyword, setKeyword] = useState("")

  useEffect(() => {
    fetch("https://jobs.github.com/positions.json?description=python&location=new+york")
    .then(response => console.log(response.json()))
    // .then(response => response.json())
    .then(data => console.log(`data i received: ${data}`))
  }, [])

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
