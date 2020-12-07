import './MainContent.css'
import { SearchForm } from '../SearchForm/SearchForm'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/data/dataActions'
import { updateUserInput } from '../../redux/userInput/userInputActions'
import Error from '../Error/Error'
import JobCard from '../JobCard/JobCard'
import React, { useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'

function MainContent({ data, userInput, fetchData, updateUserInput }) {
  const handleFormChange = (e) => {
    const { name, value } = e.target
    const newUserInput = { ...userInput, [name]: value }
    updateUserInput(newUserInput)
  }

  const debouncedFetchData = useCallback(
    debounce((description, location) => fetchData(description, location), 1000),
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

const mapStateToProps = (state) => {
  return {
    data: state.data,
    userInput: state.userInput,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (description, location) =>
      dispatch(fetchData(description, location)),
    updateUserInput: (userInput) => {
      // console.log(`dispatching ...${userInput}`)
      dispatch(updateUserInput(userInput))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
