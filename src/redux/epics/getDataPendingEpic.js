import { TOKEN } from '../../shared/credentials'
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
          ),
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        ).then((response) => {
          if (response.status !== 200) {
            throw new Error(`status: ${response.status}`)
          }
          return response.json()
        })
      ).pipe(
        catchError((err) =>
          of(dataSliceActions.rejected(`Some error happened: ${err}`))
        )
      )
    ),
    map((data) => {
      console.log(data.Jobs)
      return dataSliceActions.fulfilled(data.Jobs)
    })
  )
}

export { getDataPendingEpic }
