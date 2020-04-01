import React from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';
import { graphql } from 'gatsby';
import { Row, Col } from '../../common/Grid';
import Button from '../../common/Button';
import ConstrainedContent from '../../layout/ConstrainedContent';
import './emailSignupCta.scss';

const EmailSignupCta = ({
  headline,
  emailCtaText,
  inputPlaceholder,
  buttonText,
  textColor,
  backgroundColor,
  buttonColor,
  isFullWidth,
}) => {
  return (
    <div
      className={classnames('email-signup', { 'full-width': isFullWidth })}
      style={{ backgroundColor: backgroundColor }}
    >
      <ConstrainedContent>
        {headline && (
          <h4 style={{ color: textColor }} className="email-signup__headline">
            {headline}
          </h4>
        )}
        {emailCtaText && (
          <p className="email-signup__text" style={{ color: textColor }}>
            {emailCtaText}
          </p>
        )}
        <div>
          <form className="email-signup__form">
            <Row>
              <Col size={{ sm: 9 }}>
                <input
                  className="email-signup__input"
                  type="email"
                  placeholder={inputPlaceholder || 'Enter your email address'}
                />
              </Col>
              <Col size={{ sm: 3 }}>
                <Button
                  style={buttonColor ? { backgroundColor: buttonColor } : {}}
                  shape="rounded"
                  color="brand"
                >
                  {buttonText || 'Subscribe'}
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </ConstrainedContent>
    </div>
  );
};

EmailSignupCta.propTypes = {
  headline: string,
  emailCtaText: string,
  inputPlaceholder: string,
  buttonText: string,
  backgroundColor: string,
  textColor: string,
  buttonColor: string,
  isFullWidth: bool,
};

export default EmailSignupCta;

export const EMAIL_SIGNUP_QUERY = graphql`
  fragment EmailSignupFields on ContentfulCtaEmailSignup {
    name
    emailCtaText
    headline
    inputPlaceholder
    textColor
    buttonColor
    buttonText
    backgroundColor
    isFullWidth
  }
`;
