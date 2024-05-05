import React from 'react';
import styles from './Loader.module.scss';

export const Loader = React.memo(() => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});
