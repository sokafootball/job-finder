import React, {useState, useEffect} from 'react';
import './MainContent.css';
import SearchForm from "../SearchForm/SearchForm"
import Jobs from "../Jobs/Jobs"

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
//TODO: a function that is called whenever the form is changed, it updates the state and the value of the form fields
// handleChange(event) {
//   const {name, value, type, checked} = event.target
//   type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
// }

  function handleDescChange(e){
    setDescription(e.value)
  }

  function getData(){
    fetch(fullUrl)
    .then(response => response.json())
    .then(data => setData(data))
  }

  return (
    <div>
      <SearchForm
        handleDescChange=handleDescChange
      />
      <Jobs/>
    </div>
  )
}

export default MainContent
