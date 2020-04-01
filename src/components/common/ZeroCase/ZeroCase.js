import React from 'react';
import { func } from 'prop-types';
import Button from '../Button';

import Message from '../Message';

const ZeroCase = ({ onReset }) => (
  <Message
    icon="credit-card"
    subtitle="We couldn't find any cards that match your filters"
  >
    <Button
      onClick={onReset}
      label="Clear all Filters"
      color="secondary"
      variant="soft"
    >
      Clear all Filters
    </Button>
  </Message>
);

ZeroCase.propTypes = {
  onReset: func.isRequired,
};

export default ZeroCase;
