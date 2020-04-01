import React from 'react';

import CountryFilter from '../CountryFilter';
import Message from '../Message';

const CountryPrompt = () => (
  <Message
    icon="globe"
    subtitle="Nova Credit helps newcomers to the US find credit cards that are right for them."
    title="Where did you move from?"
  >
    <CountryFilter />
  </Message>
);

export default CountryPrompt;
