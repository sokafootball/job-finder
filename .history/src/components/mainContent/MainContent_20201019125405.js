import React, {useState, useEffect} from 'react';
import './MainContent.css';
import SearchForm from "../SearchForm/SearchForm"
import Jobs from "../jobs/Jobs"

function MainContent(){

  const baseUrl = "https://jobs.github.com/positions.json?"
  let fullUrl = baseUrl

  const[data, setData] = useState("")
  const[description, setDescription] = useState("")
  const[location, setLocation] = useState("")
  const[fullTime, setFullTime] = useState(true)


// when the user types a word in either the description or location input field or changes the full time checkbox
// -change the corresponding value in state
// -get new data
// -change the job cards accordingly

//TODO: a function that gets data from the api and save it in data everytime the value of the SearchForm changes

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
      <SearchForm/>
      <Jobs/>
    </div>
  )
}

export default MainContent
