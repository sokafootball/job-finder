import React from 'react';
import './JobCard.css';

function JobCard(props){
  return (
    <div>
      <p id="date">{props.created_at}</p>
      <img id="company-logo" src={props.company_logo}></img>
      <p id="">{props.created_at}</p>
    </div>
  )
}

export default JobCard
