import './SearchForm.scss'
import React from 'react'

export const SearchForm = (props) => {
  return (
    <div id="form-container">
      <input
        className="input-text"
        name="description"
        type="text"
        onChange={(e) => props.handleFormChange(e)}
        placeholder="Es. Python"
        value={props.userInput.description}
      />
      <input
        className="input-text"
        name="location"
        type="text"
        onChange={(e) => props.handleFormChange(e)}
        placeholder="Es. San Francisco"
        value={props.userInput.location}
      />
    </div>
  )
}
