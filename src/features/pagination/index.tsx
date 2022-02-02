import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPage, nextPage } from '../news/newsSlice';

function Pagination() {
  const currentPage = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(nextPage(currentPage + 1))}>currentPage: {currentPage}</button>
    </div>
  );
}

export default Pagination;