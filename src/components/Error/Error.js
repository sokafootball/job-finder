import './Error.scss'
import React from 'react'

function Error() {
  return (
    <div className="error">
      <p className="error__message">
        Sorry, it seems the server has some issues, try again later.
      </p>
      <img
        className="error__img"
        alt="bored cat"
        src="https://i.gifer.com/yH.gif"
      ></img>
    </div>
  )
}

export { Error }
