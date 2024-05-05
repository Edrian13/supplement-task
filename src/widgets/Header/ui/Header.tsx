import React, { useCallback } from 'react';
import styles from './Header.module.scss';
import { CustomLink, LinkTheme } from '../../../shared/ui/CustomLink';
import { useNavigate } from 'react-router-dom';

const LINKS = [
  { to: '/about', name: 'О нас' },
  { to: '/news', name: 'Новости' },
  { to: '/features', name: 'Особенности' },
];

export const Header = React.memo(() => {
  const navigate = useNavigate();

  const redirectToHomePage = useCallback(() => {
    navigate('/supplement-task');
  }, [navigate]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div onClick={redirectToHomePage} className={styles.logoContainer}>
          <div className={styles.logo} />
          <span>Andrew.Games</span>
        </div>
        <nav>
          {LINKS.map((link) => (
            <CustomLink
              key={link.to}
              linkTheme={LinkTheme.PRIMARY}
              to={link.to}
            >
              {link.name}
            </CustomLink>
          ))}
        </nav>
      </div>
    </header>
  );
});
