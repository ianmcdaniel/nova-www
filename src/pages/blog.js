import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout/Layout';
import Heading from '../components/common/Heading';
import BlogPreview from '../components/common/BlogPreview';
import Breadcrumbs from '../components/common/Breadcrumbs';
import './blog.scss';

const blog = ({ data, location }) => {
  const posts = get(data, 'allContentfulPageBlogPost.nodes');
  const breadcrumbs = [{ title: 'Blog', isActive: true }];

  return (
    <Layout location={location}>
      <Helmet title="Nova Credit Blog" />
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className="blog-index">
        <div className="blog-index__header">
          <Heading
            title="Build a world that welcomes all"
            subtitle="The official Nova Credit Blog"
          />
        </div>
        <div className="blog-index__main-content">
          {posts.map(post => (
            <BlogPreview key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

blog.propTypes = {};

export default blog;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPageBlogPost(sort: { fields: publishDate, order: DESC }) {
      nodes {
        title
        summary
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        author {
          name
          summary
          thumbnail {
            fluid(maxWidth: 350) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
