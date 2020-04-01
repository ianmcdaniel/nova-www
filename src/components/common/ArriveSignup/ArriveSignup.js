import React from 'react';
import Button from '../Button';
import './arriveSignup.scss';

const ArriveSignup = () => {
  return (
    <div className="arrive-signup">
      <h5 className="arrive-signup__header">
        Get the <em>Arrive</em> newsletter
      </h5>
      <p>
        The best advice on moving to the U.S. with guides for those preparing
        for the move and newcomers.
      </p>

      <input
        className="arrive-signup__input"
        type="email"
        maxLength="256"
        placeholder="Enter your email address"
      />

      <Button shape="rounded" color="brand" variant="outline">
        Subscribe
      </Button>
    </div>
  );
};

export default ArriveSignup;
