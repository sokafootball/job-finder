import React from 'react';
import './SearchForm.css';

function SearchForm(props){
  return (
    <div id="form-container">
      <div id="fields-container">
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
      <input
        name="fullTime"
        type="checkbox"
        onChange={e => props.handleFormChange(e)}
        checked={props.userInput.fullTime}
      />
    </div>
  )
}

export default SearchForm
