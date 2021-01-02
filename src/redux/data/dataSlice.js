import { buildUrl } from '../../shared/buildUrl'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchData = createAsyncThunk('fetchData', async (payload) => {
  // return fetch(buildUrl(payload.description, payload.location)).then(
  const response = await fetch(buildUrl(payload.description, payload.location))
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
})

const dataSlice = createSlice({
  name: 'data',
  initialState: { data: [], gotResponse: false },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => ({
      ...state,
      gotResponse: false,
    }),
    [fetchData.rejected]: (state) => ({
      ...state,
      gotResponse: true,
    }),
    [fetchData.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
      gotResponse: true,
    }),
  },
})
const { reducer } = dataSlice
export { fetchData, reducer }
