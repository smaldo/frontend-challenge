import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { INewsItem } from './types';
import { AppThunkDispatch } from '../../app/store';

import NewsItem from './newsItem';
import {
  selectNews,
  selectFavs,
  selectShow,
  selectQuery,
  selectPage,
  NewsAPICall,
  addFav,
  deleteFav
} from './newsSlice';

function News() {
  const currentNews = useAppSelector(selectNews);
  const currentFavs = useAppSelector(selectFavs);
  const currentShow = useAppSelector(selectShow);
  const currentQuery = useAppSelector(selectQuery);
  const currentPage = useAppSelector(selectPage);
  const dispatch: AppThunkDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(NewsAPICall({ currentQuery, currentPage }));
  }, [currentQuery, currentPage]);

  const likeFunction = (item: INewsItem) => {
    if (currentFavs[currentQuery][item.objectID]) {
      dispatch(deleteFav(item.objectID))
    } else {
      dispatch(addFav(item))
    }
  }

  return (
    <div>
      <h1>List of News Items: {currentShow}</h1>
      {
        currentShow === 'favs' ?
          Object.entries(currentFavs[currentQuery]).reverse().map(([id, item]) =>
            <NewsItem key={id} data={item} like={likeFunction} />
          ) :
          Object.entries(currentNews).map(([id, item]) =>
            <NewsItem key={id} data={item} like={likeFunction} />
          )
      }
    </div>
  );
}

export default News;
