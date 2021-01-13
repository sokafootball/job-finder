import { combineEpics } from 'redux-observable'
import { getDataPendingEpic } from './getDataPendingEpic'
import { userInputEpic } from './userInputEpic'

export const rootEpic = combineEpics(userInputEpic, getDataPendingEpic)
