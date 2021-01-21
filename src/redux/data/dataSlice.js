import { ERROR, LOADED, LOADING } from '../../shared/constants'
import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
  name: 'getData',
  initialState: { data: [], loadingStatus: LOADED },
  reducers: {
    pending: (state) => ({
      ...state,
      loadingStatus: LOADING,
    }),
    rejected: (state) => ({
      ...state,
      loadingStatus: ERROR,
    }),
    fulfilled: (state, action) => ({
      ...state,
      data: action.payload,
      loadingStatus: LOADED,
    }),
  },
})

const { reducer, actions } = dataSlice
export { reducer as dataSliceReducer, actions as dataSliceActions }
