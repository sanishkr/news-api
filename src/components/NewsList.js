import React from 'react';
import NewsItem from './NewsItem';

export default ({news=[]}) => {
  return (
    <div className="news-list">
    {
      news.map((n,i) => 
        <NewsItem key={i+1} {...n}/>
      )
    }
    </div>
)
}