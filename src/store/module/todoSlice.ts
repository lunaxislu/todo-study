import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface I_TodoSlice {
  title: string;
  text: string;
  id: string;
  isDone: boolean;
}

const initialState: I_TodoSlice[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<I_TodoSlice>) => {
      state.push(payload);
    },
    switchTodo: (state, { payload }: PayloadAction<string>) => {
      state.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      state.filter((todo) => todo.id !== payload);
    }
  }
});

export const { addTodo, switchTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
