import React, { useCallback } from 'react';
import styles from './GameCard.module.scss';
import { FaRegStar } from 'react-icons/fa';
import { ButtonTheme, CustomButton } from '../../../shared/ui/CustomButton';
import { IGameCard } from '../../../entities/Games';
import { useNavigate } from 'react-router-dom';

interface IGameCardProps {
  card: IGameCard;
}

export const GameCard: React.FC<IGameCardProps> = React.memo(({ card }) => {
  const { title, rating, poster, platforms, id } = card;

  const navigate = useNavigate();

  const redirectToCardDetails = useCallback(() => {
    navigate(`/card/${id}`);
  }, [id, navigate]);

  return (
    <div className={styles.gameCard}>
      <div className={styles.container}>
        <img src={`${poster}`} alt="cardImage" />
        <div className={styles.rating}>
          <span>{rating}</span>
          <FaRegStar className={styles.star} />
        </div>
        <h3>{title}</h3>
        <div>
          <span>{platforms.join('/')}</span>
        </div>
        <CustomButton
          onClick={redirectToCardDetails}
          className={styles.btnPosition}
          buttonTheme={ButtonTheme.PRIMARY}
        >
          Смотреть
        </CustomButton>
      </div>
    </div>
  );
});
