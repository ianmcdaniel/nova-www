import React from 'react';
import { string } from 'prop-types';
import { Select } from '@novacredit/pandorasbox';
import { Link } from 'gatsby';
import { useLocation, useNavigate } from '@reach/router';
import './countryNavigator.scss';

export const SUPPORTED_COUNTRIES = [
  {
    flag: 'aus',
    slug: 'australia',
    name: 'Australia',
  },
  {
    flag: 'bra',
    slug: 'brazil',
    name: 'Brazil',
  },
  {
    flag: 'can',
    slug: 'canada',
    name: 'Canada',
  },
  {
    flag: 'ind',
    slug: 'india',
    name: 'India',
  },
  {
    flag: 'mex',
    slug: 'mexico',
    name: 'Mexico',
  },
  {
    flag: 'nga',
    slug: 'nigeria',
    name: 'Nigeria',
  },
  {
    flag: 'kor',
    slug: 'south-korea',
    name: 'South Korea',
  },
  {
    flag: 'gbr',
    slug: 'united-kingdom',
    name: 'United Kingdom',
  },
];

const CountryNavigator = ({ type }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const OptionWithFlag = ({ name, flag }) => (
    <div className="country-option">
      <img src={`${location.origin}/flags/${flag}.png`} alt={name} />
      {name}
    </div>
  );

  const options = SUPPORTED_COUNTRIES.map(country => ({
    value: country.slug,
    label: <OptionWithFlag {...country} />,
    searchLabel: country.name,
  }));

  const onChange = slug => {
    navigate(`/${slug}`);
  };

  return type === 'list' ? (
    <div className="country-navigator">
      {SUPPORTED_COUNTRIES.map(({ name, flag, slug }) => (
        <div key={name} className="country-navigator__row">
          <img
            className="country-navigator__flag"
            src={`${location.origin}/flags/${flag}.png`}
          />{' '}
          <Link className="country-navigator__label" to={slug}>
            {name}
          </Link>
        </div>
      ))}
      <div className="country-navigator__no-country">
        <Link>{`Don't see your country?`}</Link>
      </div>
    </div>
  ) : (
    <div className="country-navigator__select-container">
      <Select
        className="text-left"
        classNamePrefix="country-select"
        inputName="countrySelect"
        placeholder="Select Country..."
        value={null}
        onChange={onChange}
        data={options}
        maxHeight={300}
      />
    </div>
  );
};

CountryNavigator.propTypes = {
  type: string,
};

CountryNavigator.defaultProps = {
  type: 'select',
};

export default CountryNavigator;
