import './JobCard.scss'
import { MAX_TITLE_LENGTH } from '../../shared/constants'
import React from 'react'

function JobCard(props) {
  let title = props.title
  title =
    title.length > MAX_TITLE_LENGTH
      ? `${title.slice(0, MAX_TITLE_LENGTH)}...`
      : title

  return (
    <div className="job-card">
      <div className="job-card__header">
        <a
          className="job-card__title"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className="job-card__date">{props.created_at}</p>
      </div>
      <div className="job-card__details">
        <span className="job-card__location">{props.location}</span>
        <span className="job-card__separator "> - </span>
        <span className="job-card__type">{props.type}</span>
      </div>
      <div className="job-card__company-div">
        <img
          className="job-card__company-logo"
          src={props.company_logo}
          alt="N/A"
        ></img>
        <p className="job-card__company-name">{props.company}</p>
      </div>
    </div>
  )
}

export { JobCard }
