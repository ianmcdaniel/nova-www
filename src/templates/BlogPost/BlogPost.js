import React from 'react';
import { string, object, shape } from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';

import Layout from '../../components/layout/Layout';
import Author from '../../components/common/Author';
import RichText from '../../components/common/RichText';
import EmailSignupCta from '../../components/blocks/EmailSignupCta';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import './blogPost.scss';

const BlogPost = ({ data, location }) => {
  const post = get(data, 'contentfulPageBlogPost');
  const siteTitle = get(data, 'site.siteMetadata.title');
  const breadcrumbs = [
    { title: 'Blog', url: '/blog', isActive: false },
    {
      title: post.title,
      isActive: true,
    },
  ];

  return (
    <Layout location={location}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className="blog-post">
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className="blog-post__header">
          <h1 className="title">{post.title}</h1>
          <div className="blog-post__author">
            <Author {...post.author} />
          </div>
          <Img fluid={post.image.fluid} alt={post.title} />
        </div>
        <div className="blog-post__main-content">
          <RichText {...post.body} />
        </div>
        <EmailSignupCta
          headline="Sign up for updates from the Nova Credit Team"
          buttonText="Sign up"
          backgroundColor="#f3f3f3"
        />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  location: object,
  data: shape({
    contentfulBlogPost: shape({
      author: shape({
        id: string,
        name: string,
        summary: string,
        thumbnail: object,
      }),
      body: object.isRequired,
      id: string.isRequired,
      image: object,
      title: string.isRequired,
    }).isRequired,
    site: shape({
      id: string,
      siteMetadata: object,
    }),
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
        summary
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      image {
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
