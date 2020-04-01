import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';

const Icon = ({ name, className, size, variant, tag: Tag, ...attributes }) => {
  const light = variant === 'light';
  const solid = variant === 'solid';
  const brand = variant === 'brand';
  const regular = !light && !solid && !brand;

  const variantClass = {
    fal: light,
    fas: solid,
    fa: regular,
    fab: brand,
  };

  const sizeClass = {
    [`fa-${size}`]: size,
  };

  return (
    <Tag
      className={classnames(
        'icon',
        `fa-${name}`,
        variantClass,
        sizeClass,
        className
      )}
      {...attributes}
    />
  );
};

Icon.propTypes = {
  name: string,
  className: string,
  variant: string,
  size: string,
  tag: string,
};

Icon.defaultProps = {
  name: '',
  className: '',
  variant: null,
  size: null,
  tag: 'i',
};

export default Icon;
