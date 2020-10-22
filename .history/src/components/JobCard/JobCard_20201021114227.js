import React from 'react';
import './JobCard.css';

function JobCard(props){
  return (
    <div id="card">
      <p id="date">{props.date}</p>
      <div id="header">
        <img id="company-logo" src={props.logo} alt="n/a"></img>
        <p id="company">{props.company}</p>
      </div>
      <div id="details">
        <p id="location">{props.location}</p>
        <p id="type">{props.type}</p>
      </div>
      <p id="title">{props.title}</p>
      <a id="url" href={props.url}>Link to full job ad</a>
    </div>
  )
}

export default JobCard
