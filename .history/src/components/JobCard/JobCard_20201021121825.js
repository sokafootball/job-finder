import React from 'react';
import './JobCard.css';

function JobCard(props){
  return (
    <div id="card">
      <div id="header">
        <p id="title">{props.title}</p>
        <p id="date">{props.date}</p>
      </div>
      <div id="details">
        <p id="location">{props.location} - </p>
        <p id="type">{props.type}</p>
      </div>
        <img id="company-logo" src={props.logo} alt="n/a"></img>
        <p id="company">{props.company}</p>
      <a id="url" href={props.url}>Link to full job ad</a>
    </div>
  )
}

export default JobCard
