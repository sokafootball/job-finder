import {} from '../../redux'
import './MainContent.css'
import { SearchForm } from '../SearchForm/SearchForm'
import { fetchData, updateUserInput } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../Error/Error'
import JobCard from '../JobCard/JobCard'
import React, { useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'

function MainContent() {
  const data = useSelector((state) => state.data)
  const userInput = useSelector((state) => state.userInput)
  const dispatch = useDispatch()

  const handleFormChange = (e) => {
    const { name, value } = e.target
    const newUserInput = { ...userInput, [name]: value }
    dispatch(updateUserInput(newUserInput))
  }

  const debouncedFetchData = useCallback(
    debounce(
      (description, location) => dispatch(fetchData(description, location)),
      1000
    ),
    []
  )

  useEffect(() => {
    debouncedFetchData(userInput.description, userInput.location)
  }, [debouncedFetchData, userInput])

  const buildJobCards = () => {
    let jobCards = []
    if (data.data !== undefined) {
      jobCards = data.data.map((job) => {
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
    return jobCards
  }

  return (
    <div id="main">
      <SearchForm handleFormChange={handleFormChange} userInput={userInput} />
      {data.gotResponse ? buildJobCards() : <Error />}
    </div>
  )
}

export default MainContent
