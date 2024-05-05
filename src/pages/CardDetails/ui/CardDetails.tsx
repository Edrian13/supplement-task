import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IGameCard } from '../../../entities/Games';
import styles from './CardDetail.module.scss';
import { FaRegStar } from 'react-icons/fa';
import { Slider } from '../../../widgets/Slider/ui/Slider';

export const CardDetails = () => {
  const [card, setCard] = useState<IGameCard | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchGameCard = async (id: string) => {
      try {
        const response = await axios.get(
          `https://64749fd07de100807b1b646b.mockapi.io/items/${id}`
        );

        console.log(response.data);
        setCard(response.data);
      } catch (e: unknown) {
        //отлавливаем ошибки, но время поджимает и этим заниматься не будем(
      }
    };

    fetchGameCard(id);
  }, [id]);

  return (
    <div className={styles.cardDetails}>
      <div className={styles.container}>
        {card && (
          <div>
            <Slider
              width={600}
              height={400}
              showBullets
              showNavs
              images={card?.screenshots!}
            />
          </div>
        )}
        <div className={styles.information}>
          <div>
            <span>{`Название: ${card?.title}`}</span>
          </div>
          <div>
            <span>
              {`Рейтинг: ${card?.rating}`}
              <FaRegStar className={styles.star} />
            </span>
          </div>
          <div>
            <span>{`Платформы: ${card?.platforms}`}</span>
          </div>
          <div>
            <span>{`Мультиплеер: ${card?.multiplayer ? 'Да' : 'Нет'}`}</span>
          </div>
          <div>
            <span>{`Русская озвучка: ${
              card?.russianDubbing ? 'Да' : 'Нет'
            }`}</span>
          </div>
          <div>
            <span>{`Русский язык: ${
              card?.russianLanguage ? 'Да' : 'Нет'
            }`}</span>
          </div>
          <div>
            <span>{`Количество игроков в офлайн режиме: ${card?.offlinePlayers}`}</span>
          </div>
          <div>
            <span>{`Количество игроков в онлайн режиме: ${card?.onlinePlayers}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
