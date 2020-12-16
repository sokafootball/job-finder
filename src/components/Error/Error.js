import './Error.css'
import React from 'react'

function Error() {
  return (
    <div id="error-div">
      <p id="error-message">
        Sorry, it seems the server has some issues, try again later.
      </p>
      <img
        id="error-img"
        alt="bored cat"
        src="https://i.gifer.com/yH.gif"
      ></img>
    </div>
  )
}

export { Error }
