import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from '../../../entities/Games/model/slice/gamesSlice';
import { filterReducer } from '../../../features/filters';

export const store = configureStore({
  reducer: {
    gameReducer,
    filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
