import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({ article }) => (
  <div className="preview">
    <Link to={`/resources/${article.slug}`}>
      <Img alt="" fluid={article.thumbnailImage.fluid} />
    </Link>
    <h3 className="previewTitle">
      <Link to={`/resources/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.updatedAt}</small>
    <p>{article.summary}</p>
  </div>
)
