import React from 'react';
import './JobCard.css';

function JobCard(props){
  return (
    <div id="card">
      <div id="header">
        <a id="title" href={props.url}>{props.title}</a>
        <p id="date">{props.date}</p>
      </div>
      <div id="details">
        <p id="location">{props.location}</p>
        <p id="type">{props.type}</p>
      </div>
      <div id="company-div">
        <img id="company-logo" src={props.logo} alt="n/a"></img>
        <p id="company">{props.company}</p>
      </div>
    </div>
  )
}

export default JobCard
