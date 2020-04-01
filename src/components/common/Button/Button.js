import React from 'react';
import { node, oneOf, string, object, oneOfType } from 'prop-types';
import classnames from 'classnames';

import './Button.scss';

const Button = ({
  children,
  className,
  color,
  shape,
  size,
  variant,
  tag: Tag,
  ...attributes
}) => {
  const colorClass = `btn-${variant ? `${variant}-` : ''}${color}`;
  const shapeClasses = {
    [`btn-${size}`]: size,
    [`btn-${shape}`]: shape,
  };

  return (
    <Tag
      type="button"
      className={classnames('btn', colorClass, shapeClasses, className)}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: string,
  color: oneOf(['primary', 'secondary', 'positive', 'negative', 'brand']),
  variant: oneOf(['soft', 'outline']),
  size: oneOf(['small', 'large']),
  shape: oneOf(['square', 'circle', 'rounded']),
  children: node,
  tag: oneOfType([oneOf(['a', 'button']), object]),
};

Button.defaultProps = {
  className: null,
  color: 'secondary',
  variant: null,
  size: null,
  shape: null,
  children: null,
  tag: 'button',
};

export default Button;
