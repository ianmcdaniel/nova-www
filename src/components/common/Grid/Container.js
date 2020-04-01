import React from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';

const Container = ({ children, className, tag: Tag, ...attributes }) => {
  return (
    <Tag className={classnames('container', className)} {...attributes}>
      {children}
    </Tag>
  );
};

Container.propTypes = {
  children: node.isRequired,
  className: string,
  tag: string,
};

Container.defaultProps = {
  className: null,
  tag: 'div',
};

export default Container;
