import { combineReducers, createStore } from 'redux'
import dataReducer from './data/dataReducer'
import jobCardsReducer from './jobCards/jobCardsReducer'

const { applyMiddleware } = redux
const thunkMiddleware = require('redux-thunk').default

const rootReducer = combineReducers({
  jobCards: jobCardsReducer,
  data: dataReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
