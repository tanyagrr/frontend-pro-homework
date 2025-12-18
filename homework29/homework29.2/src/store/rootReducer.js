import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    added: (state, action) => {
      state.push({
        id: state.length ? state[state.length - 1].id + 1 : 1,
        task: action.payload,
        completed: false,
      });
    },
  }
})

export const { added } = todosSlice.actions
export const { reducer } = todosSlice
