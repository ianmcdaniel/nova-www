import React from 'react';

import { string } from 'prop-types';

import './FloatingLoader.scss';

const FloatingLoader = ({ text }) => {
  return (
    <div className="floating-loader">
      <div className="floating-loader-spinner">
        LOADING...
      </div>
      <p>{text}</p>
    </div>
  );
};

FloatingLoader.propTypes = {
  text: string,
};

FloatingLoader.defaultProps = {
  text: 'Loading...',
};

export default FloatingLoader;
