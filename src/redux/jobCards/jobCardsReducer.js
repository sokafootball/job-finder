import { LOAD_JOB_CARDS } from './jobCardsTypes'
import JobCard from '../../components/JobCard/JobCard'
import React from 'react'

const initialState = { jobCards: [] }
const jobCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOB_CARDS:
      return {
        ...state,
        jobCards: data.map((job) => {
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
        }),
      }
    default:
      return state
  }
}

export default jobCardsReducer
