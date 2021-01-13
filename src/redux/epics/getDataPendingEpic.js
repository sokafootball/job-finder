import { buildUrl } from '../../shared/buildUrl'
import { actions as dataSliceActions } from '../data/dataSlice'
import { from } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

const getDataPendingEpic = (action$, state$) => {
  return action$.pipe(
    ofType(dataSliceActions.pending.toString()),
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
            type: dataSliceActions.fulfilled.toString(),
            payload: json,
          }
        : { type: dataSliceActions.rejected.toString() }
    })
  )
}

export { getDataPendingEpic }
