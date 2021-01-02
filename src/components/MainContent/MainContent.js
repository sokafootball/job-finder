import {} from '../../redux'
import './MainContent.scss'
import { Error } from '../Error/Error'
import { JobCard } from '../JobCard/JobCard'
import { Loader } from '../Loader/Loader'
import { SearchForm } from '../SearchForm/SearchForm'
import { fetchData, updateUserInput } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'
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
      (description, location) => dispatch(fetchData({ description, location })),
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
        return <JobCard {...job} key={job.id} />
      })
    }
    return jobCards
  }

  const chooseResult = () => {
    if (!data.gotResponse) {
      return <Loader />
    } else if (data.data.length > 0) {
      return buildJobCards()
    } else {
      return <Error />
    }
  }

  return (
    <div id="main">
      <SearchForm handleFormChange={handleFormChange} userInput={userInput} />
      {chooseResult()}
    </div>
  )
}

export default MainContent
