import React from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';

const Row = ({ children, className, tag: Tag, ...attributes }) => {
  return (
    <Tag className={classnames('row', className)} {...attributes}>
      {children}
    </Tag>
  );
};

Row.propTypes = {
  children: node.isRequired,
  className: string,
  tag: string,
};

Row.defaultProps = {
  className: null,
  tag: 'div',
};

export default Row;
