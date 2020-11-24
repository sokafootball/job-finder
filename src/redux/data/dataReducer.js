import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from './dataTypes'

const initialState = { data: [], gotResponse: true }
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        gotResponse: false,
      }
    default:
      return state
  }
}

export default dataReducer
