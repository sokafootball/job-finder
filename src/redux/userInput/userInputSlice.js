import { createSlice } from '@reduxjs/toolkit'

const userInputSlice = createSlice({
  name: 'userInput',
  initialState: { description: '', location: '' },
  reducers: {
    updateUserInput: (state, action) => ({
      ...state,
      description: action.payload.description,
      location: action.payload.location,
    }),
  },
})

export const { updateUserInput } = userInputSlice.actions
export default userInputSlice.reducer
