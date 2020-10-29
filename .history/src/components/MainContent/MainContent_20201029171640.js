import React, {useState, useEffect, useCallback} from 'react';
import _ from 'lodash';
import './MainContent.css';
import SearchForm from "../SearchForm/SearchForm"
import JobCard from "../JobCard/JobCard"

function MainContent(){
  const[jobCards, setJobCards] = useState([])
  const[data, setData] = useState([])
  const[userInput, setUserInput] = useState({
    description: "",
    location: "",
    fullTime: true
  })

  const handleFormChange = e => {
    const {name, value, type, checked} = e.target
    type === "checkbox"
      ? setUserInput({...userInput, [name]: checked})
      : setUserInput({...userInput,[name]: value})
  }

  const buildUrl = () => {
    let url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"
    url += userInput.description ? `&description=${userInput.description}` : ""
    url += userInput.location ? `&location=${userInput.location}` : ""
    url += userInput.fullTime ? `&full_time=${userInput.fullTime}` : ""
    return url
    }

  const getData = url => {
    fetch(url)
    // .then(response => response.json())
    .then(response => console.log(response))

    // .then(data => setData(data))
  }

  const debouncedGetData = useCallback(_.debounce(getData, 1500,{leading: true}),[])

  useEffect(() => {
    const url = buildUrl()
    debouncedGetData(url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput])

  useEffect(() => {
    let cards = []
    if(data.length !== 0) {
      cards = data.map(job => {
        return <JobCard
          key={job.id}
          date={job.created_at}
          logo={job.company_logo}
          company={job.company}
          location={job.location}
          type={job.type}
          title={job.title}
          url={job.url}
          description={job.description}
        />
     })
    }
    setJobCards(cards)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

    return (
      <div id="main">
        <SearchForm
          handleFormChange={handleFormChange}
          userInput={userInput}
        />
        {jobCards}
      </div>
    )
}

export default MainContent
