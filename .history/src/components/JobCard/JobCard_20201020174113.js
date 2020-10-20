import React from 'react';
import './JobCard.css';

function JobCard(props){
  if(props !== {}){

    return (
      <div>
        <p id="date">{props.date}</p>
        <img id="company-logo" src={props.logo} alt="n/a"></img>
        <p id="company">{props.company}</p>
        <p id="location">{props.location}</p>
        <p id="type">{props.type}</p>
        <p id="title">{props.title}</p>
        <a id="url" href={props.url}>Link to full job ad</a>
      </div>
    )
  }
}

export default JobCard
