import React from 'react';

export default ({source, author, title, description}) => {
  return (
    <div className="news-item">
      <span className="news-source">{"source"}</span>
      <div className="news-content-container">
        <div>
          <span className="news-title">title</span>
          <span className="news-author"> | author</span>
        </div>
        <span>description</span>
      </div>
    </div>
  )
}