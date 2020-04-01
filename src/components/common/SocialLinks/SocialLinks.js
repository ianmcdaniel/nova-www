import React from 'react';
import Icon from '../Icon';
import './socialLinks.scss';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/novacredit" target="_blank">
        <div className="social-links__icon-container">
          <Icon name="instagram" variant="brand" />
        </div>
      </a>
      <a href="https://www.twitter.com/nova_credit" target="_blank">
        <div className="social-links__icon-container">
          <Icon name="twitter" variant="brand" />
        </div>
      </a>
      <a href="https://www.facebook.com/novacredit" target="_blank">
        <div className="social-links__icon-container">
          <Icon name="facebook-f" variant="brand" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/company/nova-credit-inc./"
        target="_blank"
      >
        <div className="social-links__icon-container">
          <Icon name="linkedin-in" variant="brand" />
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
