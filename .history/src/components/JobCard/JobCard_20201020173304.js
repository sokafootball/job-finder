import React from 'react';
import './JobCard.css';

function JobCard(props){
  return (
    <div>
      <p id="date">{props.created_at}</p>
      <img id="company-logo" src={props.company_logo}></img>
      <p id="company-name">{props.company}</p>
      <p id="city">{props.location}</p>
      <p id="city">{props.}</p>
    </div>
  )
}

export default JobCard
