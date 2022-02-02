import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectQuery, changeQuery } from '../news/newsSlice';

function SelectQuery() {
  const currentQuery = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(changeQuery("Reactjs"))}>Reactjs</button>
      <button onClick={() => dispatch(changeQuery("Angular"))}>Angular</button>
      <button onClick={() => dispatch(changeQuery("Vuejs"))}>Vuejs</button>
    </div>
  );
}

export default SelectQuery;