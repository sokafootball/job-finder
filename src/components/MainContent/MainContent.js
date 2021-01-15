import {} from '../../redux'
import './MainContent.scss'
import { Error } from '../Error/Error'
import { JobCard } from '../JobCard/JobCard'
import { LOADED, LOADING } from '../../shared/constants'
import { Loader } from '../Loader/Loader'
import { SearchForm } from '../SearchForm/SearchForm'
import { dataSliceActions, updateUserInput } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
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
    if (Array.isArray(data.data)) {
      jobCards = data.data.map((job) => {
        return <JobCard {...job} key={job.id} />
      })
    }
    return jobCards
  }

  const chooseResult = () => {
    if (data.loadingStatus === LOADING) {
      return <Loader />
    }
    if (data.loadingStatus === LOADED) {
      return buildJobCards()
    }
    return <Error />
  }
  useEffect(() => {
    dispatch(dataSliceActions.pending(userInput))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="main-content">
      <SearchForm handleFormChange={handleFormChange} userInput={userInput} />
      {chooseResult()}
    </div>
  )
}

export default MainContent
