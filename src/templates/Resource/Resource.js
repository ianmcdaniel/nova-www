import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../../components/layout/Layout';
import Disclaimer from '../../components/common/Disclaimer';
import CategoryList from '../../components/common/CategoryList';
import Author from '../../components/common/Author';
import RichText from '../../components/common/RichText';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import './resource.scss';

const ResourceTemplate = props => {
  const article = get(props, 'data.contentfulPageArticle');
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const breadcrubs = [
    {
      title: 'Resources',
      url: '/resources',
      isActive: false,
    },
    {
      title: article.title,
      isActive: true,
    },
  ];

  return (
    <Layout location={props.location}>
      <Breadcrumbs crumbs={breadcrubs} />
      <div className="article">
        <Helmet title={`${article.title} | ${siteTitle}`} />
        <p className="article__date">{article.updatedAt}</p>
        <div className="main-hero">
          <h1 className="article__headline">{article.title}</h1>
          <p className="article__summary">{article.summary}</p>
          {article.categories && (
            <CategoryList categories={article.categories} />
          )}
          <Img
            className="article__image"
            alt={article.title}
            fluid={article.mainImage.fluid}
          />
        </div>

        <div>
          {article.disclaimer && (
            <Disclaimer
              disclaimer={article.disclaimer.disclaimerText.disclaimerText}
            />
          )}
          {article.author && <Author {...article.author} />}
          <div className="article__body">
            <RichText {...article.body} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceTemplate;

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageArticle(slug: { eq: $slug }) {
      title
      summary
      categories {
        title
        slug
      }
      author {
        name
        summary
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      disclaimer {
        disclaimerText {
          disclaimerText
        }
      }
      updatedAt(formatString: "MMMM Do, YYYY")
      mainImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`;
