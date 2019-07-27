import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import CardCTA from '../components/CardCTA';

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


class ResourceTemplate extends React.Component {
  render() {
    const article = get(this.props, 'data.contentfulArticle')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={`${article.title} | ${siteTitle}`} />

          <div className="main-hero">
          <Link to="/resources">← Back to Resources</Link>
          <br /><br />
          <h1 className="section-headline">{article.title}</h1>
            <Img alt={article.title} fluid={article.mainImage.fluid} />
          </div>
          <div className="wrapper">

            <p>{article.updatedAt}</p>
						<div className="article-body">
							{
                documentToReactComponents(article.body.json, {
								  renderNode: {
								    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
								      const fields = node.data.target.fields;
											if (fields && fields.cardSlug) {
												return <CardCTA slug={fields.cardSlug['en-US']} />
											}
								      return <h1>WTF</h1>;
								    }
								  }
								})
							}
						</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ResourceTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulArticle(slug: { eq: $slug }) {
      title
      summary
      updatedAt(formatString: "MMMM Do, YYYY")
      mainImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
			body {
				json
	    }

    }
  }
`
