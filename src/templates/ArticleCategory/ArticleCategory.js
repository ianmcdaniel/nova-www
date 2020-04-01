import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Layout from '../../components/layout/Layout';
import ArticlePreview from '../../components/common/ArticlePreview';
import { Row, Col } from '../../components/common/Grid';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import './articleCategory.scss';

const ArticleCategory = ({ data, location }) => {
  const title = get(data, 'contentfulElementArticleCategory.title');
  const siteTitle = get(data, 'site.siteMetadata.title');
  const summary = get(data, 'contentfulElementArticleCategory.summary');
  const articles = get(data, 'allContentfulPageArticle.nodes');
  const breadcrumbs = [
    {
      title: 'Resources',
      url: '/resources',
      isActive: false,
    },
    {
      title: title,
      isActive: true,
    },
  ];

  return (
    <Layout location={location}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <Helmet title={`${title} - ${siteTitle}`} />
      <div className="article-topic-page wrapper">
        <div className="article-topic-page__header">
          <p className="preheader">Topic</p>
          <h1 className="title">{title}</h1>
          <p className="subheader">{summary}</p>
        </div>
        <div>
          <Row>
            {articles.map(article => (
              <Col key={article.id} size={{ md: 3 }}>
                <ArticlePreview article={article} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Layout>
  );
};

ArticleCategory.propTypes = {
  data: object,
  location: object,
};

export default ArticleCategory;

export const pageQuery = graphql`
  query ArticleCategoryBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulElementArticleCategory(slug: { eq: $slug }) {
      title
      summary
    }
    allContentfulPageArticle(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        summary
        title
        updatedAt(formatString: "MMMM Do, YYYY")
        slug
        id
        thumbnailImage {
          fluid(maxWidth: 350) {
            ...GatsbyContentfulFluid
          }
        }
        mainImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
