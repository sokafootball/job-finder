import './JobCard.scss'
import { MAX_TITLE_LENGTH } from '../../shared/constants'
import React from 'react'

function JobCard(props) {
  let title = props.JobTitle
  title =
    title.length > MAX_TITLE_LENGTH
      ? `${title.slice(0, MAX_TITLE_LENGTH)}...`
      : title

  return (
    <div className="job-card">
      <div className="job-card__header">
        <div className="job-card__details">
          <p className="job-card__company-name">{props.Company}</p>
          <span className="job-card__separator "> - </span>
          <span className="job-card__location">{props.Location}</span>
        </div>
        <p className="job-card__date">{props.AccquisitionDate}</p>
      </div>
      <div className="job-card__main-body">
        <a
          className="job-card__title"
          href={props.URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  )
}

export { JobCard }
