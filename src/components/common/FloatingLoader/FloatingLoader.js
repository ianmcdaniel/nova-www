import React from 'react';
import { Spinner } from '@novacredit/pandorasbox';
import { string } from 'prop-types';

import './FloatingLoader.scss';

const FloatingLoader = ({ text }) => {
  return (
    <div className="floating-loader">
      <div className="floating-loader-spinner">
        <Spinner />
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
