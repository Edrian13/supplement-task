import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CustomLink.module.scss';

export enum LinkTheme {
  PRIMARY = 'primary',
}

interface ICustomLinkProps {
  children: ReactNode;
  linkTheme: LinkTheme;
  to: string;
}

export const CustomLink: React.FC<ICustomLinkProps> = React.memo((props) => {
  const { to, children, linkTheme } = props;

  return (
    <NavLink className={styles[linkTheme]} to={to}>
      {children}
    </NavLink>
  );
});
