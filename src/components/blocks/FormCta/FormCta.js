import React from 'react';
import { string, bool } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Button from '../../common/Button';
import { CTA_COUNTRIES } from '../../../consts';
import './formCta.scss';

const FormCta = ({
  headline,
  subheader,
  text,
  buttonText,
  backgroundColor,
  textColor,
  buttonColor,
  showSocialSecurity,
  showCountrySelector,
  showHomeCredit,
  showUsCredit,
  uniqueIdentifier,
}) => {
  const initialValues = {
    hasSocialSecurity: null,
    email: '',
    country: '',
    hasHomeCredit: null,
    hasUsCredit: null,
  };
  return (
    <div className="form-cta" style={{ backgroundColor: backgroundColor }}>
      <Formik initialValues={initialValues}>
        <>
          {headline && (
            <>
              <h2 style={{ color: textColor }} className="form-cta__headline">
                {headline}
              </h2>
              <div className="form-cta__divider" />
            </>
          )}
          {subheader && (
            <h5 style={{ color: textColor }} className="form-cta__subheader">
              {subheader}
            </h5>
          )}
          {text && (
            <p style={{ color: textColor }} className="form-cta__text">
              {text}
            </p>
          )}

          <Form>
            {showSocialSecurity && (
              <div className="form-cta__radio-row">
                <p>Do you have a U.S. Social Security Number (SSN)?</p>
                <label>
                  <Field
                    type="radio"
                    className="form-cta__radio"
                    name="hasSocialSecurity"
                    value="yes"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    type="radio"
                    className="form-cta__radio"
                    name="hasSocialSecurity"
                    value="no"
                  />
                  No
                </label>
              </div>
            )}
            {showCountrySelector && (
              <div>
                <p>Where are you from?</p>
                <Field name="country" as="select" className="form-cta__input">
                  <option disabled value="">
                    Select Your Country
                  </option>
                  {CTA_COUNTRIES.map(country => (
                    <option value={country} key={country}>
                      {country}
                    </option>
                  ))}
                </Field>
              </div>
            )}
            {showHomeCredit && (
              <div className="form-cta__radio-row">
                <p>Did you have a credit card or loan in your home country?</p>
                <label>
                  <Field
                    type="radio"
                    className="form-cta__radio"
                    name="hasHomeCredit"
                    value="yes"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    type="radio"
                    className="form-cta__radio"
                    name="hasHomeCredit"
                    value="no"
                  />
                  No
                </label>
              </div>
            )}
            {showUsCredit && (
              <div className="form-cta__radio-row">
                <p>Do you already have a credit card or loan in the U.S.?</p>
                <label>
                  <Field
                    type="radio"
                    className="form-cta__radio"
                    name="hasUsCredit"
                    value="yes"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    type="radio"
                    className="form-cta__radio"
                    name="hasUsCredit"
                    value="no"
                  />
                  No
                </label>
              </div>
            )}
            <div>
              <p>We’ll send a guide with your recommendations to your inbox.</p>
              <Field
                className="form-cta__input"
                type="email"
                required
                name="email"
                placeholder="Email*"
              />
            </div>
            <Button
              style={buttonColor ? { backgroundColor: buttonColor } : {}}
              color="brand"
              type="submit"
              shape="rounded"
            >
              {buttonText}
            </Button>
          </Form>
        </>
      </Formik>
    </div>
  );
};

FormCta.propTypes = {
  headline: string,
  subheader: string,
  text: string,
  buttonText: string,
  backgroundColor: string,
  textColor: string,
  buttonColor: string,
  showSocialSecurity: bool,
  showCountrySelector: bool,
  showHomeCredit: bool,
  showUsCredit: bool,
};

FormCta.defaultProps = {
  backgroundColor: '#172f4d',
  textColor: '#ffffff',
  buttonText: 'Submit',
  showHomeCredit: true,
  showUsCredit: true,
  showCountrySelector: true,
  showSocialSecurity: false,
};

export default FormCta;
