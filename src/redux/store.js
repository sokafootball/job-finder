import { applyMiddleware, combineReducers, createStore } from 'redux'

import dataReducer from './data/dataReducer'
import userInputReducer from './userInput/userInputReducer'

const thunkMiddleware = require('redux-thunk').default

const rootReducer = combineReducers({
  userInput: userInputReducer,
  data: dataReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
