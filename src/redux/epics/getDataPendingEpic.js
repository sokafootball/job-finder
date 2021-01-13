import { buildUrl } from '../../shared/buildUrl'
import { actions as dataSliceActions } from '../data/dataSlice'
import { filter, map, switchMap } from 'rxjs/operators'
import { from } from 'rxjs'

const getDataPendingEpic = (action$, state$) => {
  return action$.pipe(
    filter((action) => action.type === dataSliceActions.pending.toString()),
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
