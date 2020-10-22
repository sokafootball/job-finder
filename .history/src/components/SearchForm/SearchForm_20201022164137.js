import React from 'react';
import './SearchForm.css';

function SearchForm(props){
  return (
    <div>
      <p id="title">Find Jobs from https://jobs.github.com/</p>
      <div id="form-container">
          <input
            class="input-text"
            name="description"
            type="text"
            onChange={e => props.handleFormChange(e)}
            placeholder="Es. Python"
            value={props.userInput.description}
          />
          <input
            class="input-text"
            name="location"
            type="text"
            onChange={e => props.handleFormChange(e)}
            placeholder="Es. San Francisco"
            value={props.userInput.location}
          />
      </div>
    </div>
  )
}

export default SearchForm
