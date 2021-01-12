import {} from '../../redux'
import './MainContent.scss'
import { Error } from '../Error/Error'
import { JobCard } from '../JobCard/JobCard'
import { Loader } from '../Loader/Loader'
import { SearchForm } from '../SearchForm/SearchForm'
import { updateUserInput } from '../../redux'
// import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

function MainContent() {
  const data = useSelector((state) => state.data)
  const userInput = useSelector((state) => state.userInput)
  const dispatch = useDispatch()

  const handleFormChange = (e) => {
    const { name, value } = e.target
    const newUserInput = { ...userInput, [name]: value }
    dispatch(updateUserInput(newUserInput))
  }

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

  // useEffect(() => {
  //   dispatch(getDatapending(userInput))
  // }, [])

  return (
    <div className="main-content">
      <SearchForm handleFormChange={handleFormChange} userInput={userInput} />
      {chooseResult()}
    </div>
  )
}

export default MainContent
