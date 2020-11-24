import { combineReducers, createStore } from 'redux'
import jobCardsReducer from './jobCards/jobCardsReducer'

const rootReducer = combineReducers({
  jobCards: jobCardsReducer,
})

const store = createStore(rootReducer)

export default store
