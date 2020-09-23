import React, {useState} from 'react';

export default ({source, author, title, description, content, ...props}) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className="news-item" onClick={() => setShowContent(!showContent)}>
      <span className="news-source">{source.name}</span>
      <div className="news-content-container">
        <div>
          <span className="news-title">{title}</span>
          <span className="news-author"> | {author}</span>
        </div>
        <span className="news-desciption">{description}</span>
        <span>{new Date(props.publishedAt).toLocaleString()}</span>
        {
          showContent ?
          <div>
            <span>{content}</span>
            <img src={props.urlToImage} />
            <a href={props.url}>Link to News</a>
          </div>
          : null
        }
      </div>
    </div>
  )
}