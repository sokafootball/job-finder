import { DEBOUNCE_TIME } from '../../shared/constants'
import { dataSliceActions } from '../data/dataSlice'
import { debounceTime, mapTo } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { updateUserInput } from '../userInput/userInputSlice'

const userInputEpic = (action$) => {
  return action$.pipe(
    debounceTime(DEBOUNCE_TIME),
    ofType(updateUserInput.toString()),
    mapTo({ type: dataSliceActions.pending.toString() })
  )
}
export { userInputEpic }
