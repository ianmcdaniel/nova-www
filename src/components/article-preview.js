import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './article-preview.module.css';

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/articles/${article.slug}`}>
      <Img alt="" fluid={article.thumbnailImage.fluid} />
    </Link>
    <h3 className={styles.previewTitle}>
      <Link to={`/articles/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.updatedAt}</small>
    <p>{article.summary}</p>
  </div>
)
