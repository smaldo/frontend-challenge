import React, { useEffect } from 'react';
import axios from 'axios';
import  { INewsItem } from './types';

function News() {
  useEffect(() => {
    const NewsAPICall = async () => {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0`);
      
      console.log(response.data.hits.map( ({ objectID, author, created_at, story_title, story_url }: INewsItem) => {
        return { objectID, author, created_at, story_title, story_url };
      }));
    };
    NewsAPICall();
  }, []);
  return (
    <div>
      List of News Items with infinite scroll
    </div>
  );
}

export default News;
