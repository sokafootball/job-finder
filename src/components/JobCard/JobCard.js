import './JobCard.css'
import { MAX_TITLE_LENGTH } from '../../shared/constants'
import React from 'react'

function JobCard(props) {
  let title = props.title
  title =
    title.length > MAX_TITLE_LENGTH
      ? `${title.slice(0, MAX_TITLE_LENGTH)}...`
      : title

  return (
    <div id="card">
      <div id="card-header">
        <a
          id="job-title"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p id="date">{props.created_at}</p>
      </div>
      <div id="details">
        <span id="location">{props.location}</span>
        <span id="separator "> - </span>
        <span id="type">{props.type}</span>
      </div>
      <div id="company-div">
        <img id="company-logo" src={props.company_logo} alt="N/A"></img>
        <p id="company-name">{props.company}</p>
      </div>
    </div>
  )
}

export { JobCard }
