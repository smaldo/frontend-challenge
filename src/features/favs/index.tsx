import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectShow, changeShow } from '../news/newsSlice';

function Favs() {
  const currentShow = useAppSelector(selectShow);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(changeShow("all"))}>All</button>
      <button onClick={() => dispatch(changeShow("favs"))}>Favs</button>
    </div>
  );
}

export default Favs;
