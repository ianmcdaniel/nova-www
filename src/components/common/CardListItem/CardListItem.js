import classnames from 'classnames';
import React from 'react';
import { object, string } from 'prop-types';
import { Link } from 'gatsby';

import ExpandableList from '../ExpandableList';
import ApplyButton from '../ApplyButton';
import NovaEnabled from '../NovaEnabled';
import IndependentDisclosure from '../IndependentDisclosure';

import './CardListItem.scss';

const CardListItem = ({ card, queryString }) => {
  const isPetalCard = card.manufacturer === 'Petal';

  return (
    <div className="card-item">
      <div
        className={classnames('card-item-img', {
          'is-petal-card': isPetalCard,
        })}
      >
        <Link to={`/cards/${card.id}${queryString}`}>
          <img alt={card.name} src={card.image_url} />
        </Link>
        <div className="mt-2">
          <a
            className="card-item-rate-link"
            href={card.terms_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rates and Fees
          </a>
        </div>
      </div>
      <div className="card-item-data">
        <div className="card-item-details">
          <div>
            <h3 className="mt-1 mb-3">
              <Link
                to={`/cards/${card.id}${queryString}`}
                className="card-item-name"
              >
                {card.name}
              </Link>
              {card.source === 'independent' && <IndependentDisclosure />}
            </h3>
            <ExpandableList bullets={card.bullets} />
          </div>
          <div className="card-item-apply">
            <ApplyButton card={card} />
            {card.nova_enabled && <NovaEnabled />}
          </div>
        </div>
        <table className="card-item-rates">
          <tbody>
            <tr>
              <td>
                <strong>Intro Purchase APR </strong>
                <p>
                  {card.intro_purchase_apr_description}
                  {card.intro_purchase_apr !== null &&
                    card.intro_purchase_apr_period_description !== 'N/A' &&
                    card.intro_purchase_apr_period_description && (
                      <> for {card.intro_purchase_apr_period_description}</>
                    )}
                </p>
              </td>
              <td>
                <strong>Regular APR</strong>
                <p>{card.regular_purchase_apr_description}</p>
              </td>
              <td>
                <strong>Annual Fee</strong>
                <p>{card.annual_fee_description}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="card-item-apply-mobile">
          <ApplyButton className="btn-block" card={card} />
          {card.nova_enabled && <NovaEnabled />}
          <a href={card.terms_url} target="_blank" rel="noopener noreferrer">
            Rates and Fees
          </a>
        </div>
      </div>
    </div>
  );
};

CardListItem.propTypes = {
  card: object.isRequired,
  queryString: string,
};

CardListItem.defaultProps = {
  queryString: '',
};

export default CardListItem;
