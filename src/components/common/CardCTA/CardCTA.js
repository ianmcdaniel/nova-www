import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { gql } from 'apollo-boost';
import { Row, Col } from '../Grid';
import ApplyButton from '../ApplyButton';
import './cardCta.scss';

const GET_CARD = gql`
  query($slug: String!) {
    creditCard(slug: $slug) {
      name
      slug
      source
      bullets
      nova_enabled
      annual_fee_description
      intro_purchase_apr_description
      regular_purchase_apr_description
      apply_url
      terms_url
      processing_network
      image_url
    }
  }
`;

const CardCTA = ({ slug }) => {
  const { loading, error, data } = useQuery(GET_CARD, {
    variables: { slug },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { creditCard } = data;
  if (!creditCard) {
    return null;
  }
  return (
    <div className="card-cta" key={slug}>
      <Row>
        <Col size={{ sm: 12 }}>
          <div className="card-cta__disclosure">From our partner:</div>
        </Col>
      </Row>
      <Row>
        <Col size={{ sm: 3 }} className="card-cta__image-container">
          <img
            src={creditCard.image_url}
            className={classNames('card-cta__image', {
              'card-cta__image--petal': creditCard.source === 'petal',
            })}
          />
        </Col>
        <Col className="pr-0" size={{ sm: 6 }}>
          <div className="card-cta__card-details">
            <Link to={`/cards/${slug}`}>
              <h3 className="card-cta__name">{creditCard.name}</h3>
            </Link>
            <p className="card-cta__description">
              {creditCard.bullets[0]} Terms apply.
            </p>
          </div>
        </Col>
        <Col className="pl-2" size={{ sm: 3 }}>
          <div className="card-cta__actions">
            <ApplyButton card={creditCard} shape="rounded" />
            <div className="card-cta__terms">
              <a>Rates and Fees</a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="pr-0" size={{ sm: 3 }}>
          {creditCard.nova_enabled && (
            <div className="card-cta__nova-enabled">Nova credit-enabled</div>
          )}
        </Col>
        <Col size={{ sm: 3 }}>
          <div className="card-cta__card-label">Annual fee</div>
          <div className="card-cta__card-value">
            {creditCard.annual_fee_description}
          </div>
        </Col>
        <Col size={{ sm: 3 }}>
          <div className="card-cta__card-label">Intro Purchase APR</div>
          <div className="card-cta__card-value">
            {creditCard.intro_purchase_apr_description}
          </div>
        </Col>
        <Col size={{ sm: 3 }}>
          <div className="card-cta__card-label">Regular APR</div>
          <div className="card-cta__card-value">
            {creditCard.regular_purchase_apr_description}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardCTA;
