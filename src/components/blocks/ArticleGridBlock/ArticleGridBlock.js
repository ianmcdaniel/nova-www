import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Button from '../../common/Button';
import { Row, Col, Container } from '../../common/Grid';
import ArticlePreview from '../../common/ArticlePreview';
import './articleGridBlock.scss';

const ArticleGridBlock = ({ items }) => {
  return (
    <div className="article-grid-block full-width">
      <Container>
        <Row>
          {items.map(article => {
            return (
              <Col key={article.slug} size={{ md: 4 }}>
                <ArticlePreview
                  article={article}
                  hideDate={true}
                  hideSummary={true}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

ArticleGridBlock.propTypes = {};

export default ArticleGridBlock;

export const ARTICLE_GRID_QUERY = graphql`
  fragment ArticleGridFields on ContentfulPageArticle {
    id
    slug
    title
    thumbnailImage {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`;
