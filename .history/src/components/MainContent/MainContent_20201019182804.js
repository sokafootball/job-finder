import React, {useState, useEffect, useCallback} from 'react';
import './MainContent.css';
import SearchForm from "../SearchForm/SearchForm"
import Jobs from "../Jobs/Jobs"

function MainContent(){
  const[data, setData] = useState("")
  const[userInput, setUserInput] = useState({
    description: "",
    location: "",
    fullTime: true
  })
  // const[description, setDescription] = useState("")
  // const[location, setLocation] = useState("")
  // const[fullTime, setFullTime] = useState(true)


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

  function handleFormChange(e){
    const {name, value, type, checked} = e.target
    type === "checkbox"
    ? setUserInput({...userInput, [name]: checked})
    : setUserInput({...userInput,[name]: value})
  }

  useEffect(() => {
    console.log(`data before fetching ... ${data}`)
    getDataCallback()
    console.log(`data after fetching ... ${data}`)


      // getData(userInput)
  }, [data, getData, getDataCallback, userInput])

  const getDataCallback = useCallback(
    () => {
      getData()
    },
    [getData],
  );

  const buildUrlCallback = useCallback(
    () => {
      buildUrl()
    },
    [buildUrl],
  )

  function getData(){
    const url = builbuildUrlCallbackdUrl()
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
  }

  function buildUrl(){
    let url = "https://jobs.github.com/positions.json?"
    url += userInput.description ? `&description=${userInput.description}` : ""
    url += userInput.location ? `&location=${userInput.location}` : ""
    url += userInput.fullTime ? `&full_time=${userInput.fullTime}` : ""
    console.log(`i will query this url: ${url}`)
    return url
  }

  return (
    <div>
      <SearchForm
        handleFormChange={handleFormChange}
        userInput={userInput}
      />
      <Jobs/>
    </div>
  )
}

export default MainContent
