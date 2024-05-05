import React from 'react';
import styles from './PromoBlock.module.scss';
import { ButtonTheme, CustomButton } from '../../../shared/ui/CustomButton';

export const PromoBlock = React.memo(() => {
  return (
    <div className={styles.promoBlock}>
      <div className={styles.container}>
        <h1>Игровой Мир</h1>
        <p>
          Погрузись в захватывающий мир видеоигр и стань настоящим геймером!
        </p>
        <CustomButton buttonTheme={ButtonTheme.TRANSPARENT}>
          Присоединиться сейчас
        </CustomButton>
      </div>
    </div>
  );
});
