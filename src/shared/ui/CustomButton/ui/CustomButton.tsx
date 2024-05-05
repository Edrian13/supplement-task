import React, { ReactNode } from 'react';
import styles from './CustomButton.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

export enum ButtonTheme {
  TRANSPARENT = 'transparent',
  PRIMARY = 'primary',
}

interface ICustomButtonProps {
  children: ReactNode;
  buttonTheme: ButtonTheme;
  className?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<ICustomButtonProps> = React.memo(
  (props) => {
    const { children, buttonTheme, onClick, className = '' } = props;

    return (
      <button
        onClick={onClick}
        className={classNames(styles.button, {}, [
          styles[buttonTheme],
          className,
        ])}
      >
        {children}
      </button>
    );
  }
);
