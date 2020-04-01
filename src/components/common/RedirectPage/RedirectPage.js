import React, { useEffect } from 'react';
import Button from '../Button';
import Spinner from '../Spinner';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from '@reach/router';

import AmexRedirect from '../AmexRedirect';
import utils from '../../../utils';
import { GET_CARD } from '../../../apollo/queries';
import './RedirectPage.scss';

export const DELAY = 3000;

const CardRedirectPage = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_CARD, {
    variables: { slug },
  });
  const { creditCard = {} } = data || {};
  const isAmex = creditCard && creditCard.manufacturer === 'American Express';

  useEffect(() => {
    if (!creditCard.apply_url || isAmex) {
      return;
    }

    setTimeout(() => utils.redirect(creditCard.apply_url), DELAY);
  }, [creditCard, isAmex]);

  if (loading) {
    return (
      <article className="interstitial-content">
        <div className="interstitial-spinner">
          <Spinner />
        </div>
      </article>
    );
  }

  if (error) {
    return (
      <article className="interstitial-content">
        <h2>Could not get offer</h2>
        <Button
          label="Return to the card shop"
          onClick={() => utils.redirect('/cards')}
          primary
        />
      </article>
    );
  }

  if (isAmex) {
    return <AmexRedirect creditCard={creditCard} slug={slug} />;
  }

  return (
    <article className="interstitial-content">
      <div className="interstitial-spinner">
        <Spinner />
      </div>
      <h1>Please wait while we get your offer...</h1>
      <p className="lead">
        You will be redirected to the <strong>{creditCard.manufacturer}</strong>{' '}
        website.
      </p>
    </article>
  );
};

export default CardRedirectPage;
