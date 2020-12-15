import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from './data/dataReducer'
import { userInputReducer } from './userInput/userInputReducer'

const rootReducer = {
  userInput: userInputReducer,
  data: dataReducer,
}

const store = configureStore({ reducer: rootReducer })

export default store
