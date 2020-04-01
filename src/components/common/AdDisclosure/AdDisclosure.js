import React from 'react';
import Tooltip from '../Tooltip';

import './AdDisclosure.scss';

const AdDisclosure = () => (
  <div className="disclosure">
    <Tooltip
      position="bottom"
      theme="light"
      distance="0"
      offset="-75"
      tooltipTrigger={<p>Advertiser Disclosure</p>}
      content={
        <p className="tooltip-text">
          The card offers that appear on this site are from companies from which
          Nova Credit receives compensation. This compensation may impact how
          and where products appear on this site (including, for example, the
          order in which they appear). Nova Credit does not include all card
          companies or all card offers available in the marketplace.
        </p>
      }
    />
  </div>
);

export default AdDisclosure;
