import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Author from '../Author';
import { Row, Col } from '../Grid';
import './blogPreview.scss';

const BlogPreview = ({ image, title, summary, slug, author }) => {
  return (
    <div className="blog-preview">
      <Link to={`/blog/${slug}`}>
        <Row>
          <Col size={{ md: 4 }}>
            <div className="blog-preview__thumbnail-wrapper">
              <Img className="blog-preview__thumbnail" fluid={image.fluid} />
            </div>
          </Col>
          <Col size={{ md: 8 }}>
            <div className="blog-preview__main-content">
              <h3 className="blog-preview__title">{title}</h3>
              <p className="blog-preview__summary">{summary}</p>
              <Author variant="blog" {...author} />
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

BlogPreview.propTypes = {};

export default BlogPreview;
