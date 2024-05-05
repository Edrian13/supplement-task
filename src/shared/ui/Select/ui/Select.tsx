import React, { ChangeEvent } from 'react';
import styles from './Select.module.scss';

type OptionType = {
  option: string;
  value: string;
};

interface IListProps {
  lists: OptionType[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<IListProps> = React.memo((props) => {
  const { lists, value, onChange } = props;

  return (
    <select value={value} onChange={onChange} className={styles.list}>
      {lists.map((list) => (
        <option value={list.value} key={list.value}>
          {list.option}
        </option>
      ))}
    </select>
  );
});
