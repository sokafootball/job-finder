import './MainContent.css'
import Error from '../Error/Error'
import JobCard from '../JobCard/JobCard'
import React, { useCallback, useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import _ from 'lodash'

function MainContent() {
  const [jobCards, setJobCards] = useState([])
  const [data, setData] = useState([])
  const [gotResponse, setGotResponse] = useState(true)
  const [userInput, setUserInput] = useState({
    description: '',
    location: '',
    fullTime: true,
  })

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target
    type === 'checkbox'
      ? setUserInput({ ...userInput, [name]: checked })
      : setUserInput({ ...userInput, [name]: value })
  }

  const buildUrl = () => {
    let url =
      'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?'
    url += userInput.description ? `&description=${userInput.description}` : ''
    url += userInput.location ? `&location=${userInput.location}` : ''
    url += userInput.fullTime ? `&full_time=${userInput.fullTime}` : ''
    return url
  }

  const getData = (url) => {
    fetch(url).then((response) => {
      if (response.status === 500) {
        setGotResponse(false)
      } else {
        response.json().then((data) => setData(data))
      }
    })
  }

  const debouncedGetData = useCallback(
    _.debounce(getData, 1500, { leading: true }),
    []
  )

  useEffect(() => {
    const url = buildUrl()
    debouncedGetData(url)
  }, [userInput])

  useEffect(() => {
    let cards = []
    if (data.length !== 0) {
      cards = data.map((job) => {
        return (
          <JobCard
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
        )
      })
    }
    setJobCards(cards)
  }, [data])

  return (
    <div id="main">
      <SearchForm handleFormChange={handleFormChange} userInput={userInput} />
      {gotResponse ? jobCards : <Error />}
    </div>
  )
}

export default MainContent
