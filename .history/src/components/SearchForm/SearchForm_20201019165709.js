import React from 'react';
import './SearchForm.css';

function SearchForm(props){
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={e => props.handleDescHange(e)}
          placeholder="Python"
        />
      </form>
    </div>
  )
}

export default SearchForm
