// import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from './dataTypes'
import { buildUrl } from '../../shared/buildUrl'
import { createSlice } from '@reduxjs/toolkit'

// import { createReducer } from '@reduxjs/toolkit'

// const dataReducer = createReducer(
//   { data: [], gotResponse: true },
//   {
//     [FETCH_DATA_SUCCESS]: (state) => ({
//       ...state,
//       data: FETCH_DATA_SUCCESS.payload,
//     }),
//     [FETCH_DATA_FAILURE]: (state) => ({ ...state, gotResponse: false }),
//   }
// )

const dataSlice = createSlice({
  name: 'data',
  initialState: { data: [], gotResponse: true },
  reducers: {
    fetchDataSuccess: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    fetchDataFailure: (state) => ({ ...state, gotResponse: false }),
    fetchData: (description, location) => async (dispatch) => {
      console.log(`fetching...`)
      try {
        const response = await fetch(buildUrl(description, location))
        const data = await response.json()
        dispatch(dataSlice.actions.fetchDataSuccess(data))
      } catch (err) {
        dispatch(dataSlice.actions.fetchDataFailure(err))
      }
    },
  },
})

export const { fetchData } = dataSlice.actions
export const { reducer: dataReducer } = dataSlice

// const initialState = { data: [], gotResponse: true }
// const dataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DATA_SUCCESS:
//       return {
//         ...state,
//         data: action.payload,
//       }
//     case FETCH_DATA_FAILURE:
//       return {
//         ...state,
//         gotResponse: false,
//       }
//     default:
//       return state
//   }
// }

// export default dataReducer
