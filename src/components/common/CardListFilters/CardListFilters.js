import React, { useState } from 'react';
import classnames from 'classnames';

import CountryFilter from '../CountryFilter';
import FeaturesFilter from '../FeaturesFilter';
import RewardsFilter from '../RewardsFilter';
import Icon from '../Icon';

import './CardListFilters.scss';

const CardListFilters = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="filter-country">
        <h6 className="muted">I have credit history in</h6>
        <CountryFilter />
      </div>
      <div className="filter-control">
        <div className="filter-toggle" onClick={() => setOpen(!open)}>
          <div>
            <Icon name="sliders-h" className="mr-2" />
            Filters
          </div>
          <Icon name="chevron-down" />
        </div>
        <div className={classnames('filter-menu', { open })}>
          <FeaturesFilter />
          <RewardsFilter />
        </div>
      </div>
    </>
  );
};

export default CardListFilters;
