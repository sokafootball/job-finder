import './Loader.scss'
import React from 'react'

function Loader() {
  return (
    <div className="loader">
      <div className="loader__div loader__div-1"></div>
      <div className="loader__div loader__div-2"></div>
      <div className="loader__div loader__div-3"></div>
    </div>
  )
}

export { Loader }
