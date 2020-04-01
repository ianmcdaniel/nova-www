import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import './articlePreview.scss';

const ArticlePreview = ({ article, hideDate, hideSummary }) => (
  <div className="preview">
    <Link to={`/resources/${article.slug}`}>
      <div className="thumbnail-wrapper">
        <Img
          className="thumbnail"
          alt="preview image"
          fluid={
            article.thumbnailImage
              ? article.thumbnailImage.fluid
              : article.mainImage.fluid
          }
        />
      </div>
      {!hideDate && (
        <small className="preview__date">{article.updatedAt}</small>
      )}

      <h5 className="preview__title">{article.title}</h5>
    </Link>

    {!hideSummary && <p className="preview__summary">{article.summary}</p>}
  </div>
);

export default ArticlePreview;
