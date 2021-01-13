import { buildUrl } from '../../shared/buildUrl'
import { createSlice } from '@reduxjs/toolkit'
import { filter, map, switchMap } from 'rxjs/operators'
import { from } from 'rxjs'

const dataSlice = createSlice({
  name: 'getData',
  initialState: { data: [], gotResponse: false },
  reducers: {
    pending: (state) => ({
      ...state,
      gotResponse: false,
    }),
    rejected: (state) => ({
      ...state,
      gotResponse: true,
    }),
    fulfilled: (state, action) => ({
      ...state,
      data: action.payload,
      gotResponse: true,
    }),
  },
})

const getDataPendingEpic = (action$, state$) => {
  return action$.pipe(
    filter((action) => action.type === dataSlice.actions.pending.toString()),
    switchMap(() => {
      return from(
        fetch(
          buildUrl(
            state$.value.userInput.description,
            state$.value.userInput.location
          )
        )
      )
    }),
    switchMap((response) => {
      return response.json()
    }),
    map((json) => {
      return json
        ? {
            type: dataSlice.actions.fulfilled.toString(),
            payload: json,
          }
        : { type: dataSlice.actions.rejected.toString() }
    })
  )
}

const { reducer, actions } = dataSlice
export { reducer, actions, getDataPendingEpic }
