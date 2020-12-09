import { UPDATE_USER_INPUT } from './userInputTypes'

const initialState = { description: '', location: '' }
const userInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INPUT:
      return {
        ...state,
        description: action.payload.description,
        location: action.payload.location,
      }
    default:
      return state
  }
}

export default userInputReducer
