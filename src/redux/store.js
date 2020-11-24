import { combineReducers, createStore } from 'redux'
import jobCardsReducer from './jobCards/jobCardsReducer'

const { applyMiddleware } = redux
const thunkMiddleware = require('redux-thunk').default

const rootReducer = combineReducers({
  jobCards: jobCardsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
