import React from 'react';
import { string } from 'prop-types';

import './disclaimer.scss';

const Disclaimer = ({ disclaimer, color }) => (
  <div className="disclaimer" style={{ backgroundColor: color }}>
    <p className="disclaimer__text">{disclaimer}</p>
  </div>
);

Disclaimer.propTypes = {
  disclaimer: string,
};

Disclaimer.defaultProps = {
  disclaimer: `We and all of our authors strive to provide you with high-quality content. However, the written content on this website solely represents the views of the authors, unless otherwise specifically cited, but doesn’t represent professional financial or legal advice. As we cannot guarantee the accuracy or completeness of the published articles or sources referenced, please use the information at your own discretion.`,
};

export default Disclaimer;
