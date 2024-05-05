import React, { useCallback, useState } from 'react';
import styles from './List.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

type ListsType = {
  option: string;
  value: string;
};

interface IListProps {
  lists: ListsType[];
  onClick: (filter: string) => void;
}

export const List: React.FC<IListProps> = React.memo((props) => {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const { lists, onClick } = props;

  const handleItemClick = useCallback(
    (idx: number, filter: string) => {
      setSelectedItem(idx);
      onClick(filter);
    },
    [onClick]
  );

  return (
    <ul className={styles.list}>
      {lists.map((list, index) => (
        <li
          key={index}
          onClick={() => handleItemClick(index, list.value)}
          className={classNames('', {
            [styles.selected]: index === selectedItem,
          })}
        >
          {list.option}
        </li>
      ))}
    </ul>
  );
});
