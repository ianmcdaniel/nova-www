import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout/Layout';
import ArticlePreview from '../components/common/ArticlePreview/ArticlePreview';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const articles = get(this, 'props.data.allContentfulPageArticle.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="main-hero">
            <h1>Nova Credit creates a world beyond borders</h1>
            <p>
              Moving to a new country is hard. On top of that, basic tasks like
              renting an apartment or getting a credit card can be almost
              impossible without a US credit history. Nova Credit lets you
              arrive and thrive.
            </p>
            <Link to="cards/" className="button">
              Find Credit Cards
            </Link>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Recent Articles</h2>
            <ul className="article-list">
              {articles.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPageArticle(
      sort: { fields: [updatedAt], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          slug
          title
          summary
          updatedAt(formatString: "MMMM Do, YYYY")
          thumbnailImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
