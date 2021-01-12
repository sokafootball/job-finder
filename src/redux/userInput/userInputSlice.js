import { createSlice } from '@reduxjs/toolkit'
import { actions as dataSliceActions } from '../data/dataSlice'
import { filter, mapTo, startWith } from 'rxjs/operators'

const userInputSlice = createSlice({
  name: 'userInput',
  initialState: { description: '', location: '' },
  reducers: {
    updateUserInput: (state, action) => ({
      ...state,
      description: action.payload.description,
      location: action.payload.location,
    }),
  },
})

const userInputEpic = (action$) => {
  return action$.pipe(
    startWith({ type: dataSliceActions.pending.toString() }),
    filter((action) => {
      return action.type === userInputSlice.actions.updateUserInput.toString()
    }),
    mapTo({ type: dataSliceActions.pending.toString() })
  )
}

export const { updateUserInput } = userInputSlice.actions
export const { reducer } = userInputSlice
export { userInputEpic }
