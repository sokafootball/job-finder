import React from 'react';
import './JobCard.css';

function JobCard(props){

  return (
    <div id="card">
      <div id="header">
        <a id="title" href={props.url} target="_blank">{props.title}</a>
        <p id="date">{props.date}</p>
      </div>
      <div id="details">
        <span id="location">{props.location}</span>
        <span id="separator "> - </span>
        <span id="type">{props.type}</span>
      </div>
      <div id="company-div">
        <img id="company-logo" src={props.logo} alt="N/A"></img>
        <p id="company-name">{props.company}</p>
      </div>
    </div>
  )
}

export default JobCard
