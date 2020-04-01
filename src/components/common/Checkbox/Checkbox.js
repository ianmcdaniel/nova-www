import React from 'react';
import { bool, string } from 'prop-types';
import { Field } from 'formik';

import Icon from '../Icon';

import './Checkbox.scss';

const Checkbox = ({ label, name, checked }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label className="checkbox">
      <Field type="checkbox" name={name} checked={checked} />
      <span className="checkmark">
        <Icon name="check" />
      </span>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  checked: bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
