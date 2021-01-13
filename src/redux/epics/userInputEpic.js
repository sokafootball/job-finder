import { DEBOUNCE_TIME } from '../../shared/constants'
import { actions as dataSliceActions } from '../data/dataSlice'
import { debounceTime, filter, mapTo } from 'rxjs/operators'
import { updateUserInput } from '../userInput/userInputSlice'

const userInputEpic = (action$) => {
  return action$.pipe(
    debounceTime(DEBOUNCE_TIME),
    filter((action) => {
      return action.type === updateUserInput.toString()
    }),
    mapTo({ type: dataSliceActions.pending.toString() })
  )
}
export { userInputEpic }
