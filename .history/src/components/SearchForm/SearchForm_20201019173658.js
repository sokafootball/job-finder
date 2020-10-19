import React from 'react';
import './SearchForm.css';

function SearchForm(props){
  return (
    <div>
      <form>
        <input
          name="description"
          type="text"
          onChange={e => props.handleFormChange(e)}
          placeholder="Python"
          value={props.userInput.description}
        />
      </form>
    </div>
  )
}

export default SearchForm
