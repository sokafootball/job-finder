import { buildUrl } from '../../shared/buildUrl'
import { catchError, map, switchMap } from 'rxjs/operators'
import { dataSliceActions } from '../data/dataSlice'
import { from, of } from 'rxjs'
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
    }),
    catchError((err) =>
      of(dataSliceActions.rejected(`Some error happened: ${err}`))
    )
  )
}

export { getDataPendingEpic }
