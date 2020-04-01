import classnames from 'classnames';
import React from 'react';

import { useQuery } from '@apollo/react-hooks';

import AdDisclosure from '../AdDisclosure';
import ApplyButton from '../ApplyButton';
import Breadcrumbs from '../Breadcrumbs';
import CardDetails from '../CardDetails';
import Heading from '../Heading';
import NotFound from '../NotFound';
import { Row, Col } from '../Grid';

import useScrollTo from '../../../hooks/useScrollTo';
import { GET_CARD } from '../../../apollo/queries/';
import './CardDetailsPage.scss';

const CardDetailsPage = ({ slug, location }) => {
  useScrollTo();
  const { data, error, loading } = useQuery(GET_CARD, {
    variables: { slug },
  });

  if (loading) {
    return (
      <div className="page-loader">
        LOADING...
      </div>
    );
  }
  if (error || !data) {
    return (
      <div>
        Error: {error ? error.message : 'Could not retrieve data for this card'}
      </div>
    );
  }

  const { creditCard = {} } = data;
  if (!creditCard) {
    return <NotFound />;
  }
  const isPetalCard = creditCard.manufacturer === 'Petal';

  return (
    <>
      <Row className="row--full-width">
        <Breadcrumbs
          crumbs={[
            { title: 'Credit Cards', url: '/cards' },
            { isActive: true, title: creditCard.name },
          ]}
          queryString={location.search}
        />
        <AdDisclosure />
      </Row>
      <Row className="card-details__main-row">
        <Col size={{ md: 10 }} offset={{ md: 1 }}>
          <Row>
            <Col size={{ lg: 3 }} className="mb-4">
              <img
                className={classnames('card-img', {
                  'is-petal-card': isPetalCard,
                })}
                src={creditCard.image_url}
                alt={creditCard.name}
              />
              <ApplyButton
                card={creditCard}
                className="btn-block"
                size="large"
              />
              <div className="card-rates-link">
                <a
                  href={creditCard.terms_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rates and Fees
                </a>
              </div>
            </Col>
            <Col size={{ lg: 8 }} className="card-details__primary-content">
              <Heading
                title={creditCard.name}
                subtitle={
                  creditCard.manufacturer && `By ${creditCard.manufacturer}`
                }
                disclosure={
                  creditCard.source === 'independent'
                    ? `
									The information for this card has been collected independently by
									Nova Credit and has not been reviewed or provided by the card issuer.
								`
                    : ''
                }
              />
              <CardDetails card={creditCard} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CardDetailsPage;
