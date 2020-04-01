import React from 'react';
import { array } from 'prop-types';
import './constrainedContent.scss';

const ConstrainedContent = ({ children }) => {
  return <div className="constrained-content">{children}</div>;
};

ConstrainedContent.propTypes = {
  children: array,
};

export default ConstrainedContent;
