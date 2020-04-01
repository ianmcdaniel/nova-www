import React from 'react';
import Button from '../Button';
import { shape, string, oneOf } from 'prop-types';

import Icon from '../Icon';
import utils from '../../../utils';
import { SUBSCRIBE_URL } from '../../../consts';

import './ApplyButton.scss';

const ApplyButton = ({ card, size, className, shape }) => {
  const startRedirect = () => {
    // An AMEX card doesn't immediately redirect to AMEX so wait until the user clicks
    // the take me to AMEX button (on our redirect page) to fire these events.
    window.open(`redirect/${card.slug}`);
    utils.redirect(SUBSCRIBE_URL);
  };

  return (
    <Button
      color="primary"
      className={className}
      size={size}
      onClick={startRedirect}
      shape={shape}
    >
      <>
        <Icon size="small" name="lock" tag="span" />
        Apply Now
      </>
    </Button>
  );
};

ApplyButton.defaultProps = {
  className: '',
  size: null,
};

ApplyButton.propTypes = {
  card: shape({
    apply_url: string.isRequired,
    processing_network: string.isRequired,
  }).isRequired,
  className: string,
  size: string,
  shape: oneOf(['square', 'circle', 'rounded']),
};

export default ApplyButton;
