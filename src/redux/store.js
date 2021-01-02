import { configureStore } from '@reduxjs/toolkit'
import { reducer as dataSlice } from './data/dataSlice'
import { reducer as userInputReducer } from './userInput/userInputSlice'

const rootReducer = {
  userInput: userInputReducer,
  data: dataSlice,
}

const store = configureStore({ reducer: rootReducer })

export default store
