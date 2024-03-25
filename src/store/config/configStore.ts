import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../module/todoSlice';
const store = configureStore({
  reducer: { todoSlice }
});

export type AppDispatch = typeof store.dispatch;
export type Rootstate = ReturnType<typeof store.getState>;
export default store;
