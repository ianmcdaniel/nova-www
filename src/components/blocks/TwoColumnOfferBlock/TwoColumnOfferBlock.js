import React from 'react';
import { string, object, arrayOf, number } from 'prop-types';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Markdown from '../../common/Markdown';
import { Row, Col, Container } from '../../common/Grid';
import Icon from '../../common/Icon';
import Button from '../../common/Button';
import Disclaimer from '../../common/Disclaimer';
import CardCta from '../../common/CardCTA';
import './twoColumnOfferBlock.scss';

const TwoColumnOfferBlock = ({
  headline,
  preheader,
  cardsAvailable,
  disclaimer,
  image,
  text,
  buttonLink,
  buttonText,
  cardSlugs,
}) => {
  const disclaimerText = get(disclaimer, 'disclaimerText.disclaimerText');
  return (
    <div className="two-column-offer full-width">
      <Container>
        <Row>
          <Col size={{ md: 5 }}>
            {preheader && <h4 className="preheader">{preheader}</h4>}
            {headline && <h1 className="title title--small">{headline}</h1>}
            {cardsAvailable && (
              <p className="subheader">
                <Icon className="two-column-offer__icon" name="check-circle" />{' '}
                {cardsAvailable} credit cards available
              </p>
            )}
            {image && (
              <Img className="two-column-offer__image" fluid={image.fluid} />
            )}
            {text && (
              <div className="two-column-offer__text">
                <Markdown content={text.text} />
              </div>
            )}
            {disclaimerText && (
              <Disclaimer disclaimer={disclaimerText} color="#e8ecf0" />
            )}
            {buttonLink && buttonText && (
              <Button tag={Link} to={buttonLink} color="brand" shape="rounded">
                {buttonText}
              </Button>
            )}
          </Col>
          <Col className="two-column-offer__card-column" size={{ md: 7 }}>
            {cardSlugs.map(slug => (
              <CardCta key={slug} slug={slug} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

TwoColumnOfferBlock.propTypes = {
  headline: string,
  preheader: string,
  cardsAvailable: number,
  disclaimer: object,
  image: object,
  text: object,
  buttonLink: string,
  buttonText: string,
  cardSlugs: arrayOf(string),
};

export default TwoColumnOfferBlock;

export const TWO_COLUMN_OFFER_BLOCK_FIELDS = graphql`
  fragment TwoColumnOfferBlockFields on ContentfulBlockTwoColumnOffer {
    headline
    preheader
    cardsAvailable
    id
    disclaimer {
      disclaimerText {
        disclaimerText
      }
    }
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    text {
      text
    }
    buttonLink
    buttonText
    cardSlugs
  }
`;
