import React from 'react';
import './JobCard.css';

function JobCard(props){

  return (
    <div id="card">
      <div id="header">
        <a id="title" href={props.url}>{props.title}</a>
        <p id="date">{props.date}</p>
      </div>
s      <div id="company-div">
        <img id="company-logo" src={props.logo} alt="n/a"></img>
        <p id="company">{props.company}</p>
      </div>
    </div>
  )
}

export default JobCard
