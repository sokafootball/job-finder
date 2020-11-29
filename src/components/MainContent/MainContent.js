import './MainContent.css'
import { SearchForm } from '../SearchForm/SearchForm'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/data/dataActions'
import { updateUserInput } from '../../redux/userInput/userInputActions'
import Error from '../Error/Error'
import JobCard from '../JobCard/JobCard'
import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'

function MainContent({ data, userInput, fetchData, updateUserInput }) {
  // const [jobCards, setJobCards] = useState([])
  // const [gotResponse, setGotResponse] = useState(true)

  const handleFormChange = (e) => {
    // const { name, value } = e.target({ ...userInput, [name]: value })
    const { name, value } = e.target
    const newUserInput = { ...userInput, [name]: value }
    updateUserInput(newUserInput)
    fetchData(userInput.description, userInput.location)
  }

  // const buildUrl = () => {
  //   let url =
  //     'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?'
  //   url += userInput.description ? `&description=${userInput.description}` : ''
  //   url += userInput.location ? `&location=${userInput.location}` : ''
  //   return url
  // }

  // const getData = (url) => {
  //   fetch(url).then((response) => {
  //     if (response.status === 500) {
  //       setGotResponse(false)
  //     } else {
  //       response.json().then((data) => setData(data))
  //     }
  //   })
  // }

  // const debouncedGetData = useCallback(
  //   _.debounce(getData, 1500, { leading: true }),
  //   []
  // )

  // useEffect(() => {
  // const url = buildUrl()
  // debouncedGetData(url)
  //   fetchData(userInput.description, userInput.location)
  // }, [userInput])

  // useEffect(() => {
  //   let cards = []
  //   if (data.length !== 0) {
  //     cards = data.map((job) => {
  //       return (
  //         <JobCard
  //           key={job.id}
  //           date={job.created_at}
  //           logo={job.company_logo}
  //           company={job.company}
  //           location={job.location}
  //           type={job.type}
  //           title={job.title}
  //           url={job.url}
  //           description={job.description}
  //         />
  //       )
  //     })
  //   }
  //   setJobCards(cards)
  // }, [data])
  const buildJobCards = () => {
    const jobCards = []
    if (data.data.length !== 0) {
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
      {/* {gotResponse ? jobCards : <Error />} */}
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
      console.log(`dispatching ...${userInput}`)
      dispatch(updateUserInput(userInput))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
