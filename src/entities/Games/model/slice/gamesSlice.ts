import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getGameCards } from '../services/getGameCards';
import { IGameCard, IGamesSliceState } from '../types/GameTypes';

const gamesSliceState: IGamesSliceState = {
  gameCards: [],
  error: null,
  isLoading: false,
};

export const gameSlice = createSlice({
  name: 'games',
  initialState: gamesSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGameCards.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getGameCards.fulfilled,
      (state, action: PayloadAction<IGameCard[]>) => {
        state.isLoading = false;
        state.gameCards = action.payload;
      }
    );
    builder.addCase(getGameCards.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { actions: gamesActions } = gameSlice;
export const { reducer: gameReducer } = gameSlice;
