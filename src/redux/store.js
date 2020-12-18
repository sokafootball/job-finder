import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './data/dataSlice'
import userInputReducer from './userInput/userInputSlice'

const rootReducer = {
  userInput: userInputReducer,
  data: dataSlice,
}

const store = configureStore({ reducer: rootReducer })

export default store
