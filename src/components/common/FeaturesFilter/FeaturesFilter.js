import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import FilterCheckbox from '../FilterCheckbox';
import FilterContext, { TYPES } from '../../../context/Filter';

const CARD_FEATURES = {
  no_annual_fee: false,
  zero_intro_purchase_apr: false,
  zero_intro_transfer_apr: false,
  no_deposit_required: false,
};

const FeaturesFilter = () => {
  const { dispatch, features: currentFeatures } = useContext(FilterContext);

  const features = { ...CARD_FEATURES };
  currentFeatures.forEach(key => {
    const normalizedKey = key.toLowerCase();

    if (features[normalizedKey] !== undefined) {
      features[normalizedKey] = true;
    }
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{ features }}
      validate={values => {
        const updatedFilters =
          Object.keys(values.features)
            .filter(key => !!values.features[key])
            .join() || undefined;

        dispatch({ type: TYPES.UPDATE_FEATURES, payload: updatedFilters });
      }}
    >
      {({ values }) => (
        <Form>
          <h6 className="muted mt-5">Card Features</h6>
          <FilterCheckbox
            name="features.no_annual_fee"
            checked={values.features.no_annual_fee}
            label="No Annual Fee"
            tooltip={`Some cards don't charge a fee each year for
							their use. This is appealing, but keep in mind
							that the benefits these cards offer might be
							less as a result.`}
          />
          <FilterCheckbox
            name="features.zero_intro_purchase_apr"
            checked={values.features.zero_intro_purchase_apr}
            label="0% Intro APR"
            tooltip={`Some cards offer to charge no interest for an introductory
							period. That means the purchases you make for that period
							won't generate interest fees if you don't pay the bill in
							full each month.`}
          />
          <FilterCheckbox
            name="features.zero_intro_transfer_apr"
            checked={values.features.zero_intro_transfer_apr}
            label="0% Intro Balance Transfer"
            tooltip={`Some cards offer new members the option of transferring
							a balance from their existing card to the new card with
							no interest charged on the amount for a period of time.`}
          />
          <FilterCheckbox
            name="features.no_deposit_required"
            checked={values.features.no_deposit_required}
            label="No Deposit Required"
            tooltip={`Some cards (known as "secured cards") require an up front deposit in order to apply for the card.
							The credit line on these cards is usually the same amount as the deposit, which you can get back upon closing
							the card.`}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FeaturesFilter;
