import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'

class ArticleIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const articles = get(this, 'props.data.allContentfulArticle.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="main-hero">
            <h1>Articles, Tips and Tricks for Newcomers</h1>
            <p>Tips and guides to help you better integrate into your new community</p>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">All articles</h2>
            <ul className="article-list">
              {articles.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticleIndex

export const pageQuery = graphql`
  query ArticlesIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticle(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          slug
          title
          summary
          updatedAt(formatString: "MMMM Do, YYYY")
          thumbnailImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
