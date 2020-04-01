import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import Checkbox from '../Checkbox';
import FilterContext, { TYPES } from '../../../context/Filter';

import Tooltip from '../Tooltip';
import tooltipImg from '../../../assets/images/tooltip-icon.png';

import './RewardsFilter.scss';

const CARD_REWARDS = {
  airline: false,
  hotel: false,
  gas: false,
  cash_back: false,
};

const RewardsFilter = () => {
  const { dispatch, rewards: currentRewards } = useContext(FilterContext);

  const rewards = { ...CARD_REWARDS };
  currentRewards.forEach(key => {
    const normalizedKey = key.toLowerCase();

    if (rewards[normalizedKey] !== undefined) {
      rewards[normalizedKey] = true;
    }
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{ rewards }}
      validate={values => {
        const updatedRewards =
          Object.keys(values.rewards)
            .filter(key => !!values.rewards[key])
            .join() || undefined;

        dispatch({ type: TYPES.UPDATE_REWARDS, payload: updatedRewards });
      }}
    >
      {({ values }) => (
        <Form>
          <div className="rewards-filter">
            <h6 className="muted mt-5">
              Rewards
              <Tooltip
                className="tooltip"
                position="top"
                theme="light"
                arrow="true"
                content={
                  <p className="muted">
                    {`Rewards are the benefits card members receive for every
										dollar they spend using the card. Some cards offer
										points or miles card members can use for free or
										low-cost airline tickets, others offer points that can
										be used for free or low-cost hotel rooms, some for cash
										refunds for has purchases, and others for cash back on
										the card — a refund on the money you've spent that
										reduces your card balance`}
                  </p>
                }
                tooltipTrigger={<img src={tooltipImg} alt="" />}
              />
            </h6>
          </div>
          <Checkbox
            name="rewards.airline"
            checked={values.rewards.airline}
            label="Airline"
          />
          <Checkbox
            name="rewards.hotel"
            checked={values.rewards.hotel}
            label="Hotel"
          />
          <Checkbox
            name="rewards.gas"
            checked={values.rewards.gas}
            label="Gas"
          />
          <Checkbox
            name="rewards.cash_back"
            checked={values.rewards.cash_back}
            label="Cash Back"
          />
        </Form>
      )}
    </Formik>
  );
};

export default RewardsFilter;
