import { buildUrl } from '../../shared/buildUrl'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchData = createAsyncThunk('fetchData', (payload) => {
  console.log(`fetching...`)
  console.log(payload)
  return fetch(buildUrl(payload.description, payload.location))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText)
      return response.json()
    })
    .then((json) => json)
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

export { fetchData }
export default dataSlice.reducer