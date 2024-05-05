export type { IGameCard, IGamesSliceState } from './model/types/GameTypes';

export { gamesActions, gameReducer } from './model/slice/gamesSlice';

export { getGameCards } from './model/services/getGameCards';
