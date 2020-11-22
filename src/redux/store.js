import { createStore } from 'redux'
import jobCardsReducer from './jobCards/jobCardsReducer'

const rootReducer = redux.combinerReducers({
  jobCards: jobCardsReducer,
})

const store = createStore(rootReducer)

export default store

// import {createStore} from "redux"
// import cakeReducer from "./cake/cakeReducer"

// const store = createStore(cakeReducer)

// export default store
