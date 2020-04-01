import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from '../../common/Grid';
import './blockQuoteBlock.scss';

const BlockQuoteBlock = ({ attribution, quote, image }) => {
  return (
    <div className="block-quote">
      <Row>
        <Col className="block-quote__image-column" size={{ md: 3 }}>
          <Img
            className="block-quote__image"
            alt={image.title}
            fluid={image.fluid}
          />
        </Col>
        <Col size={{ md: 9 }}>
          <p className="block-quote__quote">{quote.quote}</p>
          <p className="block-quote__attribution">{attribution}</p>
        </Col>
      </Row>
    </div>
  );
};

BlockQuoteBlock.propTypes = {};

export default BlockQuoteBlock;

export const BLOCK_QUOTE_QUERY = graphql`
  fragment BlockQuoteFields on ContentfulBlockBlockQuote {
    attribution
    id
    quote {
      quote
    }
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`;
