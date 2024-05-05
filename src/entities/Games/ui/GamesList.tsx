import React, { useEffect } from 'react';
import styles from './GamesList.module.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../app/providers/StoreProvider/hooks';
import { GameCard } from '../../../widgets/GameCard';
import { getGameCards } from '../model/services/getGameCards';

export const GamesList = React.memo(() => {
  const dispatch = useAppDispatch();
  const gameCards = useAppSelector((state) => state.gameReducer.gameCards);
  const { currentFilter, currentSort, currentPage } = useAppSelector(
    (state) => state.filterReducer
  );

  useEffect(() => {
    dispatch(getGameCards({ currentSort, currentFilter, currentPage }));
  }, [currentFilter, currentPage, currentSort, dispatch]);

  return (
    <div className={styles.gamesList}>
      <div className={styles.container}>
        {gameCards.map((gameCard, index) => (
          <GameCard key={`gameCard.poster${index}`} card={gameCard} />
        ))}
      </div>
    </div>
  );
});
