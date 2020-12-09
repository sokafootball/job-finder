import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import dataReducer from './data/dataReducer'
import userInputReducer from './userInput/userInputReducer'

const thunkMiddleware = require('redux-thunk').default

const rootReducer = combineReducers({
  userInput: userInputReducer,
  data: dataReducer,
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)

export default store
