import { DataSliceReducer } from './data/dataSlice'
import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
import { reducer as userInputReducer } from './userInput/userInputSlice'

const epicMiddleware = createEpicMiddleware()

const rootReducer = {
  userInput: userInputReducer,
  data: DataSliceReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
})

epicMiddleware.run(rootEpic)

export default store
