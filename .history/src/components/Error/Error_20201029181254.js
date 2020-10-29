import React from 'react';
import "./Error.css"

function Error(){
  return (
    <div id="error-div">
      <p id="error-message">Sorry, it seems the server has some issues, please try again later.</p>
      <img id="error-img" alt="bored cat" src="https://media4.giphy.com/media/gL9jHlvagKls6T3qDM/giphy.gif?cid=ecf05e47fivgmlfh8mqjnvcsyrei045xsduofeg4nfjwlztw&rid=giphy.gif"></img>
    </div>
  )
}

export default Error
