import React from 'react';
import { string, object, shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Markdown from '../../common/Markdown';
import { Row, Col } from '../../common/Grid';
import Button from '../../common/Button';
import './productOffer.scss';

const ProductOffer = ({
  headline,
  logo,
  text,
  buttonColor,
  buttonText,
  buttonLink,
}) => {
  const isExternalLink = buttonLink && !!buttonLink.match(/^http/);
  return (
    <div className="product-offer">
      <Row>
        <Col size={{ md: 8 }}>
          {headline && (
            <h3 className="product-offer__headline">
              <strong>{headline}</strong>
            </h3>
          )}
          <p className="product-offer__text">
            <Markdown content={text.text} />
          </p>
        </Col>
        <Col className="product-offer__image-col pr-5" size={{ md: 4 }}>
          {logo && <Img fluid={logo.fluid} />}
          {!logo && buttonText && buttonLink && (
            <Button
              shape="rounded"
              to={buttonLink}
              color="brand"
              href={buttonLink}
              tag={isExternalLink ? 'a' : Link}
              style={{ backgroundColor: buttonColor }}
            >
              {buttonText}
            </Button>
          )}
        </Col>
      </Row>
      {logo && buttonText && buttonLink && (
        <Button
          shape="rounded"
          to={buttonLink}
          color="brand"
          href={buttonLink}
          tag={isExternalLink ? 'a' : Link}
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

ProductOffer.propTypes = {
  headline: string,
  buttonColor: string,
  buttonLink: string,
  buttonText: string,
  logo: shape({
    fluid: object,
  }),
  text: shape({
    text: string,
  }),
};

export default ProductOffer;
export const PRODUCT_OFFER_FIELDS = graphql`
  fragment ProductOfferFields on ContentfulElementProductOffer {
    id
    headline
    buttonColor
    buttonText
    buttonLink
    logo {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    text {
      text
    }
  }
`;
