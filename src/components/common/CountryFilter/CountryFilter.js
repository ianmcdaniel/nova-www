import React, { useContext } from 'react';

import { string } from 'prop-types';

import countries from '../../../assets/data/countries.json';
import FilterContext, { TYPES } from '../../../context/Filter';

import './CountryFilter.scss';

export const SUPPORTED_COUNTRIES = [
  'AUS',
  'BRA',
  'CAN',
  'CHN',
  'GBR',
  'IND',
  'KOR',
  'MEX',
  'NGA',
  'USA',
];

const OptionWithFlag = ({ name, code }) => (
  <div className="country-option">
    <img
      src={`${window.location.origin}/flags/${code.toLowerCase()}.png`}
      alt={name}
    />
    {name}
  </div>
);

OptionWithFlag.propTypes = {
  code: string.isRequired,
  name: string.isRequired,
};

const supportedOptions = countries
  .filter(({ code }) => SUPPORTED_COUNTRIES.includes(code))
  .map(country => ({
    value: country.code.toLowerCase(),
    label: <OptionWithFlag {...country} />,
    searchLabel: country.name,
  }));

const unsupportedOptions = countries
  .filter(({ code }) => !SUPPORTED_COUNTRIES.includes(code))
  .map(({ name, code }) => {
    return {
      value: code.toLowerCase(),
      label: name,
      searchLabel: name,
    };
  });

const filterOptions = ({ data }, input) => {
  if (input) {
    return data.searchLabel.toLowerCase().includes(input.toLowerCase());
  }
  return true;
};

const CountryFilter = ({ location }) => {
  const { country, dispatch } = useContext(FilterContext);

  const options = [...supportedOptions, ...unsupportedOptions];
  const selected = options.find(opt => opt.value === country) || null;

  const onChange = option => {
    dispatch({ type: TYPES.UPDATE_COUNTRY, payload: option });
  };

  return (
    <div className="country-select">
      <select
        className="text-left"
        classNamePrefix="country-select"
        inputName="countrySelect"
        placeholder="Select Country..."
        value={selected ? selected.value : ''}
        onChange={onChange}
        maxHeight={300}
        filterOption={filterOptions}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default CountryFilter;
