import React from 'react';
import { arrayOf, object } from 'prop-types';

import CardListItem from '../CardListItem';

const CardList = ({ cards, location }) => {
  return (
    <>
      {cards.map(card => (
        <CardListItem key={card.id} card={card} queryString={location.search} />
      ))}
    </>
  );
};

CardList.propTypes = {
  cards: arrayOf(object).isRequired,
  location: object.isRequired,
};

export default CardList;
