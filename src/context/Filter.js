import React, { createContext, useReducer } from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

import { getValidFeatures, getValidRewards } from '../utils';

const FilterContext = createContext();

const INITIAL_STATE = {
  country: undefined,
  features: [],
  rewards: [],
};
export const TYPES = {
  RESET_FILTERS: 'RESET_FILTERS',
  UPDATE_COUNTRY: 'UPDATE_COUNTRY',
  UPDATE_FEATURES: 'UPDATE_FEATURES',
  UPDATE_REWARDS: 'UPDATE_REWARDS',
};

const reducer = (state, { payload, type }) => {
  switch (type) {
    case TYPES.RESET_FILTERS:
      return {
        ...state,
        features: INITIAL_STATE.features,
        rewards: INITIAL_STATE.rewards,
      };
    case TYPES.UPDATE_COUNTRY:
      return { ...state, country: payload };
    case TYPES.UPDATE_FEATURES:
      return { ...state, features: getValidFeatures(payload) };
    case TYPES.UPDATE_REWARDS:
      return { ...state, rewards: getValidRewards(payload) };
    default:
      throw new Error();
  }
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const value = { dispatch, ...state };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

FilterContextProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default FilterContext;
