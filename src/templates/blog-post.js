import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import CardCTA from '../components/CardCTA';

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
						<div>
							{
								post.bodyRich
									? documentToReactComponents(post.bodyRich.json, {
										  renderNode: {
										    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
													console.log(node)
										      const fields = node.data.target.fields;
													if (fields && fields.cardSlug) {
														return <CardCTA slug={fields.cardSlug['en-US']} />
													}
										      return <h1>WTF</h1>;
										    }
										  }
										})
									: <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
							}
						</div>
          </div>



        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
			bodyRich {
				json
	    }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
