import React, { ChangeEvent, useCallback } from 'react';
import styles from './FilterBar.module.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../app/providers/StoreProvider/hooks';
import { filterActions } from '../../../features/filters';
import { Select } from '../../../shared/ui/Select';
import { List } from '../../../shared/ui/List/ui/List';

const SORT_OPTIONS = [
  { option: 'Сортировать ПО', value: '' },
  { option: 'Рейтингу', value: 'rating' },
];

const FILTER_OPTIONS = [
  { option: 'PC', value: 'platforms=PC' },
  { option: 'PS', value: 'platforms=PlayStation' },
  { option: 'Русский Язык', value: 'russianLanguage=true' },
  { option: 'Русский Озвучка', value: 'russianDubbing=true' },
  { option: 'Мультиплеер', value: 'multiplayer=true' },
];

export const FilterBar = React.memo(() => {
  const dispatch = useAppDispatch();
  const { currentSort } = useAppSelector((state) => state.filterReducer);

  const onChangeSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(filterActions.setSort(event.target.value));
    },
    [dispatch]
  );

  const onClickList = useCallback(
    (event: string) => {
      dispatch(filterActions.setFilter(event));
    },
    [dispatch]
  );

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterContainer}>
        <div className={styles.sortBlock}>
          <div>
            <span>Сортировка:</span>
          </div>
          <Select
            value={currentSort}
            onChange={onChangeSelect}
            lists={SORT_OPTIONS}
          />
        </div>
        <div className={styles.filterBlock}>
          <div>
            <span>Фильтрация:</span>
          </div>
          <List onClick={onClickList} lists={FILTER_OPTIONS} />
        </div>
      </div>
    </div>
  );
});
