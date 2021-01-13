import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
  name: 'getData',
  initialState: { data: [], gotResponse: false },
  reducers: {
    pending: (state) => ({
      ...state,
      gotResponse: false,
    }),
    rejected: (state) => ({
      ...state,
      gotResponse: true,
    }),
    fulfilled: (state, action) => ({
      ...state,
      data: action.payload,
      gotResponse: true,
    }),
  },
})

const { reducer, actions } = dataSlice
export { reducer as DataSliceReducer, actions as dataSliceActions }
