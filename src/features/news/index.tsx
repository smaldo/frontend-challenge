import { useEffect } from 'react';
import styled from "@emotion/styled/macro";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { AppThunkDispatch } from '../../app/store';
import {
  selectNews,
  selectFavs,
  selectShow,
  selectQuery,
  selectPage,
  NewsAPICall,
} from './newsSlice';
import NewsItem from './newsItem';

const Div = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    margin: 0 0 60px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr; 
    gap: 30px 20px; 
    grid-template-areas: 
      ". ."
      ". ."
      ". ."
      ". .";
  }
  @media (min-width: 1440px) {
    padding: 0 150px 0 150px;
    gap: 30px 40px; 
  }
`
const Message = styled.div`
  width: 550px;
  height: 90px;
  padding: 0 0 0 25px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;
`

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

  return (
    <Div>
      {
        currentShow === 'favs' ?
          (
            Object.entries(currentFavs[currentQuery]).length > 0 ?
              Object.entries(currentFavs[currentQuery]).reverse().map(([id, item]) => {
                return <NewsItem key={id} data={item} like={true} />;
              }) :
              <Message>No likes in this category yet.</Message>
          ) :
          Object.entries(currentNews).map(([id, item]) => {
            if (item.story_title !== null) {
              return <NewsItem key={id} data={item} like={currentFavs[currentQuery][item.objectID] !== undefined} />;
            }
          })
      }
    </Div>
  );
}

export default News;
