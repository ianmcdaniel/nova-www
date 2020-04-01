import React from 'react';
import { bool, string } from 'prop-types';
import Checkbox from '../Checkbox';
import Tooltip from '../Tooltip';
import tooltipImg from '../../../assets/images/tooltip-icon.png';

import './FilterCheckbox.scss';

const FilterCheckbox = ({ label, name, checked, tooltip }) => {
  return (
    <div className="filter-checkbox">
      <Checkbox
        className="checkbox"
        name={name}
        checked={checked}
        label={label}
      />
      <Tooltip
        position="top"
        theme="light"
        arrow="true"
        content={<p className="muted tooltip-text">{tooltip}</p>}
        tooltipTrigger={<img src={tooltipImg} alt="" />}
      />
    </div>
  );
};

FilterCheckbox.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  checked: bool,
  tooltip: string.isRequired,
};

FilterCheckbox.defaultProps = {
  checked: false,
};

export default FilterCheckbox;
