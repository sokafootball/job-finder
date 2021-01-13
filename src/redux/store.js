import { combineEpics } from 'redux-observable'
import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { reducer as dataSlice } from './data/dataSlice'
import { getDataPendingEpic } from './epics/getDataPendingEpic'
import { userInputEpic } from './epics/userInputEpic'
import { reducer as userInputReducer } from './userInput/userInputSlice'

const epicMiddleware = createEpicMiddleware()

const rootReducer = {
  userInput: userInputReducer,
  data: dataSlice,
}

const rootEpic = combineEpics(userInputEpic, getDataPendingEpic)

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
})

epicMiddleware.run(rootEpic)

export default store
