import './JobCard.scss'
import {
  MAX_COMPANY_LOCATION_LENGTH,
  MAX_COMPANY_NAME_LENGTH,
  MAX_TITLE_LENGTH,
  SMARTPHONE_BREAKPOINT,
} from '../../shared/constants'
import React from 'react'

function JobCard(props) {
  let viewportWidth = window.innerWidth
  let title = props.JobTitle
  let companyName = props.Company
  let companyLocation = props.Location
  if (viewportWidth < SMARTPHONE_BREAKPOINT) {
    title = title.split('-')[0]
    title =
      title.length > MAX_TITLE_LENGTH
        ? `${title.slice(0, MAX_TITLE_LENGTH)}...`
        : title
    companyName =
      companyName.length > MAX_COMPANY_NAME_LENGTH
        ? `${companyName.slice(0, MAX_COMPANY_NAME_LENGTH)}...`
        : companyName
    companyLocation = companyLocation.split(',')[0]
    companyLocation =
      companyLocation.length > MAX_COMPANY_LOCATION_LENGTH
        ? `${companyLocation.slice(0, MAX_COMPANY_LOCATION_LENGTH)}...`
        : companyLocation
  }

  return (
    <div className="job-card">
      <div className="job-card__header">
        <div className="job-card__details">
          <p className="job-card__company-name">{companyName}</p>
          <span className="job-card__separator "> - </span>
          <span className="job-card__location">{companyLocation}</span>
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
