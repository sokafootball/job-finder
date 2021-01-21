import { ERROR, LOADED, LOADING } from '../../shared/constants'
import { dataSliceActions, dataSliceReducer } from './dataSlice'

describe('dataSlice reducers', () => {
  it('should handle Pending', () => {
    const initialState = { data: [], loadingStatus: LOADED }
    expect(dataSliceReducer(initialState, dataSliceActions.pending())).toEqual({
      ...initialState,
      loadingStatus: LOADING,
    })
  })
})
