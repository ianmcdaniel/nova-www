import React, { useContext, useEffect, useState } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';

import AdDisclosure from '../AdDisclosure';
import Breadcrumbs from '../Breadcrumbs';
import CardList from '../CardList';
import CardListFilters from '../CardListFilters';
import CountryPrompt from '../CountryPrompt';
import FilterContext, { TYPES } from '../../../context/Filter';
import FloatingLoader from '../FloatingLoader';
import Heading from '../Heading';
import EmailCTA from '../EmailCTA';
import { Row } from '../Grid';

import useCookie from '../../../hooks/useCookie';
import useScrollTo from '../../../hooks/useScrollTo';
import ZeroCase from '../ZeroCase';
import { COOKIES } from '../../../consts';
import { GET_ALL_CARDS } from '../../../apollo/queries';
import { stringifyArray } from '../../../utils';
import './CardListPage.scss';

const CardListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch, country, features, rewards } = useContext(FilterContext);
  const [cards, setCards] = useState(null);
  const countryCookie = useCookie(COOKIES.COUNTRY);

  const filters = qs.parse(location.search.slice(1)) || {};

  useEffect(() => {
    const countryFromCookie = countryCookie.get();
    const newCountry = filters.country || country || countryFromCookie;

    dispatch({ type: TYPES.UPDATE_COUNTRY, payload: newCountry });
    dispatch({ type: TYPES.UPDATE_FEATURES, payload: filters.features });
    dispatch({ type: TYPES.UPDATE_REWARDS, payload: filters.rewards });
    // Only ever call when mounting.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (country) {
      countryCookie.set(country);
    }
  }, [country, countryCookie]);

  useEffect(() => {
    const queryString =
      qs.stringify({
        country,
        features: stringifyArray(features),
        rewards: stringifyArray(rewards),
      }) || undefined;
    if (queryString) {
      const adjustedUrl =
        location.origin + location.pathname + '?' + queryString;
      navigate(adjustedUrl, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, features, rewards]);

  useScrollTo();

  const variables = {
    features,
    rewards,
    country,
  };
  const { data, error, loading } = useQuery(GET_ALL_CARDS, { variables });

  // store cards in state so we dont lose them when fetching new cards
  if (data && data.creditCards && data.creditCards.nodes !== cards && country) {
    setCards(data.creditCards.nodes);
  }

  if (!country) {
    return <CountryPrompt />;
  }

  const onReset = () => dispatch({ type: TYPES.RESET_FILTERS });

  return (
    <>
      <Row className="row--full-width">
        <Breadcrumbs
          crumbs={[{ isActive: true, title: 'Credit Cards' }]}
          queryString={location.search}
        />
        <AdDisclosure />
      </Row>

      <Heading
        title="Credit Cards for Newcomers"
        subtitle={[
          <>
            These credit cards from our partners are options for newcomers to
            the United States
          </>,
          <>
            Nova Credit helps newcomers use their foreign credit history to
            apply for financial products in the U.S.{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.novacredit.com/resources/how-to-transfer-your-credit-score"
            >
              Learn More
            </a>
          </>,
        ]}
      />
      <div className="row pt-5">
        <div className="col-lg card-filters-container">
          <CardListFilters />
          <EmailCTA />
        </div>
        <div className="col-lg card-list-container">
          {loading && <FloatingLoader />}
          {error && (
            <div className="error-message">
              Something went wrong: {error.message}
            </div>
          )}
          {cards && cards.length === 0 && <ZeroCase onReset={onReset} />}
          {cards && <CardList cards={cards} location={location} />}
        </div>
      </div>
    </>
  );
};

export default CardListPage;
