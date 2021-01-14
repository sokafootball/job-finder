import { buildUrl } from '../../shared/buildUrl'
import { catchError, map, switchMap } from 'rxjs/operators'
import { dataSliceActions } from '../data/dataSlice'
import { from, of } from 'rxjs'
import { ofType } from 'redux-observable'

const getDataPendingEpic = (action$, state$) => {
  return action$.pipe(
    ofType(dataSliceActions.pending.toString()),
    switchMap(() =>
      from(
        fetch(
          buildUrl(
            state$.value.userInput.description,
            state$.value.userInput.location
          )
        ).then((response) => response.json())
      ).pipe(
        catchError((err) =>
          of(dataSliceActions.rejected(`Some error happened: ${err}`))
        )
      )
    ),
    map((data) => {
      return Array.isArray(data)
        ? {
            type: dataSliceActions.fulfilled.toString(),
            payload: data,
          }
        : data
    })
  )
}

export { getDataPendingEpic }
