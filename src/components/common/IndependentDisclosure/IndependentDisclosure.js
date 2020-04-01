import React from 'react';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

import './IndependentDisclosure.scss';

const IndependentDisclosure = () => {
  return (
    <Tooltip
      className="independent-disclosure"
      position="top"
      theme="light"
      arrow="true"
      tooltipTrigger={
        <div>
          <Icon name="info-circle" variant="solid" className="muted" />
        </div>
      }
      content={
        <p className="independent-disclosure-content">
          The information for this card has been collected independently by Nova
          Credit and has not been reviewed or provided by the card issuer.
        </p>
      }
    />
  );
};

export default IndependentDisclosure;
