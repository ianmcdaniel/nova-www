import React from 'react';
import { object } from 'prop-types';

import Markdown from '../Markdown';

import { CREDIT_RATING_LABELS } from '../../../consts';
import './CardDetails.scss';

const CardDetails = ({ card }) => {
  return (
    <>
      {card.description && (
        <p className="card-description muted">{card.description}</p>
      )}
      <h5 className="card-description__header">Details</h5>
      <ul className="card-bullets muted">
        {card.bullets.map(
          bullet =>
            bullet && (
              <li key={bullet}>
                <p>{bullet}</p>
              </li>
            )
        )}
      </ul>

      {card.legal_description && (
        <div className="muted card-legal-description">
          <Markdown content={card.legal_description} />
        </div>
      )}

      <h5 className="card-description__header">APRs and Fees</h5>
      <table className="card-details">
        <tbody>
          <tr>
            <th>Annual Fee</th>
            <td>{card.annual_fee_description}</td>
          </tr>
          <tr>
            <th>Purchase Intro APR</th>
            <td>
              {card.intro_purchase_apr_description}
              {card.intro_purchase_apr !== null &&
                card.intro_purchase_apr_period_description &&
                card.intro_purchase_apr_period_description !== 'N/A' && (
                  <> for {card.intro_purchase_apr_period_description}</>
                )}
            </td>
          </tr>
          <tr>
            <th>Transfer Intro APR</th>
            <td>
              {card.intro_transfer_apr_description}
              {card.intro_transfer_apr !== null &&
                card.intro_transfer_apr_period_description &&
                card.intro_transfer_apr_period_description !== 'N/A' && (
                  <> for {card.intro_transfer_apr_period_description}</>
                )}
            </td>
          </tr>
          <tr>
            <th>Regular APR</th>
            <td>{card.regular_purchase_apr_description}</td>
          </tr>
          <tr>
            <th colpan="2">
              <a
                href={card.terms_url}
                className="card-rates-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rates and Fees
              </a>
            </th>
          </tr>
        </tbody>
      </table>

      <h5 className="card-description__header">Additional Info</h5>
      <table className="card-details">
        <tbody>
          <tr>
            <th>Processing Network</th>
            <td>{card.processing_network}</td>
          </tr>
          <tr>
            <th>Credit Rating</th>
            <td>
              {card.credit_rating
                .map(rating => CREDIT_RATING_LABELS[rating.toUpperCase()])
                .join(', ')}
            </td>
          </tr>
          <tr>
            <th>Max Late Fee</th>
            <td>{card.late_payment_fee_description}</td>
          </tr>
          <tr>
            <th>Max Overlimit Fee</th>
            <td>{card.over_limit_fee_description}</td>
          </tr>
          <tr>
            <th>Max Penalty APR</th>
            <td>{card.penalty_apr_description}</td>
          </tr>
          <tr>
            <th>Balance Transfer Fee</th>
            <td>{card.balance_transfer_fee_description}</td>
          </tr>
          <tr>
            <th>Cash Advance Fee</th>
            <td>{card.cash_advance_fee_description}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

CardDetails.propTypes = {
  card: object.isRequired,
};

export default CardDetails;
