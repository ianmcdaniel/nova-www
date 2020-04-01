import React from 'react';
import { string } from 'prop-types';

import Icon from '../Icon';

import Tooltip from '../Tooltip';

import './NovaEnabled.scss';

const NovaEnabled = ({ tooltipText }) => (
  <div className="nova-enabled">
    <Tooltip
      position="bottom"
      theme="light"
      arrow="true"
      tooltipTrigger={
        <div>
          <Icon
            size="small"
            name="question-circle"
            tag="span"
            className="question-circle"
          />
          <p className="nova-enabled-text">Nova Credit-enabled</p>
        </div>
      }
      content={<p className="muted tooltip-text">{tooltipText}</p>}
    />
  </div>
);

NovaEnabled.propTypes = {
  tooltipText: string,
};

NovaEnabled.defaultProps = {
  tooltipText: 'This card issuer accepts foreign credit history in selected countries.',
};

export default NovaEnabled;
