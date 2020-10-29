import React from 'react';
import './JobCard.css';

function JobCard(props){
  return (
    <div>
      <p id="date">{props.created_at}</p>
      <img id="date" src={props.company_logo}></img>
    </div>
  )
}

export default JobCard