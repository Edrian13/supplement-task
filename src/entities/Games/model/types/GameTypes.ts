import { SerializedError } from '@reduxjs/toolkit';

export interface IGameScreenshots {
  url: string;
}

export interface IGameCard {
  id: number;
  title: string;
  rating: number;
  poster: string;
  screenshots: IGameScreenshots[];
  platforms: string[];
  offlinePlayers: number;
  onlinePlayers: number;
  russianLanguage: boolean;
  russianDubbing: boolean;
  multiplayer: boolean;
}

export interface IGamesSliceState {
  gameCards: IGameCard[];
  error: SerializedError | null;
  isLoading: boolean;
}

export interface IGetGameCars {
  currentSort: string;
  currentFilter: string;
  currentPage: number;
}
