import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IGameCard, IGetGameCars } from '../types/GameTypes';

export const getGameCards = createAsyncThunk(
  'games/getGameCards',

  async (
    { currentSort, currentFilter, currentPage }: IGetGameCars,
    thunkAPI
  ) => {
    const sorting = `sortBy=${currentSort}&order=desc`;

    try {
      const response = await axios.get<IGameCard[]>(
        `https://64749fd07de100807b1b646b.mockapi.io/items?page=${currentPage}&limit=6&${sorting}&${currentFilter}`
      );

      return response.data;
    } catch (e: unknown) {
      return thunkAPI.rejectWithValue(e as AxiosError);
    }
  }
);
