import React from 'react';
import styles from './Footer.module.scss';

export const Footer = React.memo(() => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Игровой Рай. Все права защищены.</p>
    </footer>
  );
});
