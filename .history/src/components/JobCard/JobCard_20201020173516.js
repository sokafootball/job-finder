import React from 'react';
import './JobCard.css';

function JobCard(props){
  return (
    <div>
      <p id="date">{props.created_at}</p>
      <img id="company-logo" src={props.company_logo} alt="n/a"></img>
      <p id="company">{props.company}</p>
      <p id="location">{props.location}</p>
      <p id="type">{props.type}</p>
      <p id="title">{props.title}</p>
      <a id="url" href={props.url}></a>
    </div>
  )
}

export default JobCard
