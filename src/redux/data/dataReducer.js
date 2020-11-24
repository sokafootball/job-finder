import { LOAD_DATA } from './dataTypes'
import React from 'react'
import redux from 'redux'
import store from '../store'

const initialState = { data: [] }
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        data: [],
      }
    default:
      return state
  }
}

export default dataReducer
