import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IfilterSliceState } from '../types/FilterTypes';

const filterSliceState: IfilterSliceState = {
  currentSort: '',
  currentFilter: '',
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterSliceState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.currentSort = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
