import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout/Layout';
import ArticlePreviewRow from '../components/common/ArticlePreviewRow';
import ImageCopyBlock from '../components/blocks/ImageCopyBlock';
import Breadcrumbs from '../components/common/Breadcrumbs';

const ArticleIndex = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const categories = get(
    data,
    'allContentfulElementArticleCategory.nodes'
  ).filter(
    ({ slug, promotedArticles }) => slug !== 'promoted' && promotedArticles
  );
  const promoted = get(
    data,
    'contentfulElementArticleCategory.promotedArticles'
  );
  const hero = get(data, 'contentfulBlockImageWCopy');
  const breadcrumbs = [
    {
      title: 'Resources',
      isActive: true,
    },
  ];
  return (
    <Layout location={location}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div>
        <Helmet title={siteTitle} />
        <ImageCopyBlock {...hero} preheader="resource center" />
        <div>
          <div className="promoted-row">
            <div className="link-list">
              <h4 className="section-headline--small">Articles by Category</h4>
              <ul>
                {categories.map(({ slug, title }) => {
                  return (
                    <li key={slug}>
                      <a href={`#${slug}`}>{title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <ArticlePreviewRow
              isSmall={true}
              title="Most popular articles"
              articles={promoted}
              limit={3}
            />
          </div>
          {categories.map(({ slug, title, promotedArticles }) => {
            return (
              <ArticlePreviewRow
                title={title}
                key={slug}
                anchor={slug}
                articles={promotedArticles}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ArticleIndex;

export const pageQuery = graphql`
  query ArticlesIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulElementArticleCategory {
      nodes {
        id
        title
        slug
        promotedArticles {
          slug
          title
          summary
          thumbnailImage {
            fluid(maxWidth: 350) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    contentfulElementArticleCategory(slug: { eq: "promoted" }) {
      promotedArticles {
        slug
        title
        summary
        thumbnailImage {
          fluid(maxWidth: 350) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    contentfulBlockImageWCopy(preheader: { eq: "Resource Center" }) {
      title
      id
      image {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      copy {
        json
      }
      imageOnRight
    }
  }
`;
