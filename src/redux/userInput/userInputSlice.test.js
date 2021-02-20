import { reducer, updateUserInput } from './userInputSlice'

describe('userInput reducer', () => {
  it('should handle updateUserInput', () => {
    const initialState = { description: '', location: '' }
    const payload = { description: 'description', location: 'location' }
    const action = updateUserInput(payload)
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      description: action.payload.description,
      location: action.payload.location,
    })
  })
})
