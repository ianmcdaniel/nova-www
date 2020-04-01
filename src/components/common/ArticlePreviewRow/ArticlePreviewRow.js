import React from 'react';
import { Link } from 'gatsby';
import { string, array, number, bool } from 'prop-types';
import classnames from 'classnames';
import ArticlePreview from '../ArticlePreview';
import { Row, Col } from '../Grid';
import './articlePreviewRow.scss';

const ArticlePreviewRow = ({ title, articles, limit, anchor, isSmall }) => {
  const displayArticles = articles.slice(0, limit);

  return (
    <div
      className={classnames('article-preview-row', {
        'article-preview-row--small': isSmall,
      })}
    >
      {isSmall ? (
        <h4 className="section-headline--small">{title}</h4>
      ) : (
        <div className="article-preview-row__header">
          <h3 className="article-preview-row__title" id={anchor}>
            {title}
          </h3>
          <Link
            className="article-preview-row__link"
            to={`/categories/${anchor}/`}
          >
            View All
          </Link>
        </div>
      )}
      <div>
        <Row>
          {displayArticles.map(article => {
            return (
              <Col size={{ md: isSmall ? 4 : 3 }} key={article.slug}>
                <ArticlePreview hideDate={true} article={article} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

ArticlePreviewRow.propTypes = {
  title: string,
  articles: array,
  limit: number,
  isSmall: bool,
};

ArticlePreviewRow.defaultProps = {
  limit: 4,
  isSmall: false,
};

export default ArticlePreviewRow;
