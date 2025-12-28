import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    added: (state, action) => {
      state.push({
         id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    isCheckedChanged: (state, action) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
    },
    deleted: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        return state.filter(todo => todo.id !== action.payload);
      }
    },
    deletedAll: (state) => {
      return state = [];
    },
    edited: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.value;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase("TODOS_FETCH_SUCCEEDED", (state, action) => {
      state.push(...action.payload)
    })
  }
})

export const { added } = todosSlice.actions
export const { isCheckedChanged } = todosSlice.actions
export const { deleted } = todosSlice.actions
export const { deletedAll } = todosSlice.actions
export const { edited } = todosSlice.actions
export const { reducer } = todosSlice
