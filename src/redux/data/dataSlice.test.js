import { ERROR, LOADED, LOADING } from '../../shared/constants'
import { dataSliceActions, dataSliceReducer } from './dataSlice'

describe('dataSlice reducers', () => {
  const initialState = { data: [], loadingStatus: LOADED }
  it('should handle Pending', () => {
    expect(dataSliceReducer(initialState, dataSliceActions.pending())).toEqual({
      ...initialState,
      loadingStatus: LOADING,
    })
  })
  it('should handle Rejected', () => {
    expect(dataSliceReducer(initialState, dataSliceActions.rejected())).toEqual(
      {
        ...initialState,
        loadingStatus: ERROR,
      }
    )
  })
  it('should handle Fulfilled', () => {
    const payload = 'payload'
    const action = dataSliceActions.fulfilled(payload)
    expect(dataSliceReducer(initialState, action)).toEqual({
      ...initialState,
      loadingStatus: LOADED,
      data: action.payload,
    })
  })
})
