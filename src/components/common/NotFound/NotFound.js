import React from 'react';
import { Link } from 'gatsby';
import Button from '../Button';
import bridge from '../../../assets/images/bridge.jpg';

import './notFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <img src={bridge} />
        <h2 className="title">The page you're looking for isn't here</h2>
        <div className="subheader">We're not quite sure what happened</div>
        <div className="not-found__button">
          <Button tag={Link} to="/" size="large" shape="rounded" color="brand">
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
