import './SearchForm.scss'
import React from 'react'

export const SearchForm = (props) => {
  return (
    <div className="search-form">
      <input
        className="search-form__input-text"
        name="description"
        type="text"
        onChange={(e) => props.handleFormChange(e)}
        placeholder="Es. Python"
        value={props.userInput.description}
      />
      <input
        className="search-form__input-text"
        name="location"
        type="text"
        onChange={(e) => props.handleFormChange(e)}
        placeholder="Es. San Francisco"
        value={props.userInput.location}
      />
    </div>
  )
}
