import React from 'react';
import { INewsItem } from './types';

function NewsItem({data, like}: {data: INewsItem, like: (item: INewsItem) => void}) {

  return (
    <div >
      <h4>{data.story_title}</h4>
      <button onClick={() => like(data) }>
        Like
      </button>
    </div>
  );
}

export default NewsItem;