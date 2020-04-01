import React from 'react';
import { string, bool } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { Row, Col } from '../../common/Grid';
import {
  CTA_COUNTRIES,
  CTA_MONTHS,
  CTA_YEARS,
  CTA_SERVICE_CENTERS,
} from '../../../consts';
import Button from '../../common/Button';
import './statusCheckCta.scss';

const StatusCheckCta = ({
  headline,
  subheader,
  text,
  buttonText,
  backgroundColor,
  textColor,
  buttonColor,
  showTimeOfArrival,
  showCountrySelector,
  showServiceCenterSelector,
  uniqueIdentifier,
}) => {
  const initialValues = {
    month: '',
    year: '',
    email: '',
    country: '',
    serviceCenter: '',
  };
  return (
    <div
      className="status-check-cta"
      style={{ backgroundColor: backgroundColor }}
    >
      <Formik initialValues={initialValues}>
        <Row>
          <Col size={{ sm: 6 }}>
            {headline && (
              <>
                <h2
                  style={{ color: textColor }}
                  className="status-check-cta__headline"
                >
                  {headline}
                </h2>
                <div className="status-check-cta__divider" />
              </>
            )}
            {subheader && (
              <h5
                style={{ color: textColor }}
                className="status-check-cta__subheader"
              >
                {subheader}
              </h5>
            )}
            {text && (
              <p
                style={{ color: textColor }}
                className="status-check-cta__text"
              >
                {text}
              </p>
            )}
          </Col>
          <Col size={{ sm: 6 }}>
            <Form>
              {showTimeOfArrival && (
                <>
                  <p>Time of arrival in the U.S. (or planned)</p>
                  <div className="status-check-cta__date-fields">
                    <Field
                      as="select"
                      name="month"
                      className="status-check-cta__input status-check-cta__input--narrow"
                    >
                      <option disabled value="">
                        Month
                      </option>
                      {CTA_MONTHS.map(month => (
                        <option value={month} key={month}>
                          {month}
                        </option>
                      ))}
                    </Field>
                    <Field
                      as="select"
                      name="year"
                      className="status-check-cta__input status-check-cta__input--narrow"
                    >
                      <option disabled value="">
                        Year
                      </option>
                      {CTA_YEARS.map(year => (
                        <option value={year} key={year}>
                          {year}
                        </option>
                      ))}
                    </Field>
                  </div>
                </>
              )}
              <div>
                <Field
                  className="status-check-cta__input"
                  type="email"
                  required
                  name="email"
                  placeholder="Email*"
                />
              </div>
              {showCountrySelector && (
                <div>
                  <Field
                    name="country"
                    as="select"
                    className="status-check-cta__input"
                  >
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
              {showServiceCenterSelector && (
                <div>
                  <Field
                    name="serviceCenter"
                    as="select"
                    className="status-check-cta__input"
                  >
                    {CTA_SERVICE_CENTERS.map(center => (
                      <option value={center} key={center}>
                        {center}
                      </option>
                    ))}
                  </Field>
                </div>
              )}
              <div className="status-check-cta__bottom-row">
                <Button
                  style={buttonColor ? { backgroundColor: buttonColor } : {}}
                  color="brand"
                  type="submit"
                  shape="rounded"
                >
                  {buttonText}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Formik>
    </div>
  );
};

StatusCheckCta.propTypes = {
  headline: string,
  subheader: string,
  text: string,
  buttonText: string,
  backgroundColor: string,
  textColor: string,
  buttonColor: string,
  showTimeOfArrival: bool,
  showCountrySelector: bool,
  showServiceCenterSelector: bool,
};

StatusCheckCta.defaultProps = {
  backgroundColor: '#172f4d',
  textColor: '#ffffff',
  buttonText: 'Submit',
  showTimeOfArrival: true,
  showCountrySelector: true,
  showServiceCenterSelector: false,
};

export default StatusCheckCta;
