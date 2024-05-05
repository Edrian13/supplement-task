import React, { useCallback } from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../app/providers/StoreProvider/hooks';
import { filterActions } from '../../../features/filters';

export const Pagination = React.memo(() => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state) => state.filterReducer.currentPage
  );

  const onChangePage = useCallback(
    (event: number) => {
      dispatch(filterActions.setCurrentPage(event));
      console.log(event);
    },
    [dispatch]
  );

  // из-за того, что бэк нам не шлет количество страниц, приходится самому указывать, у нас будет 3.

  return (
    <div className={styles.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={2}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName={styles.active}
      />
    </div>
  );
});
