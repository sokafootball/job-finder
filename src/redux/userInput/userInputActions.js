import { UPDATE_USER_INPUT } from './userInputTypes'

const updateUserInput = (userInput) => {
  return {
    type: UPDATE_USER_INPUT,
    payload: userInput,
  }
}

export { updateUserInput }
