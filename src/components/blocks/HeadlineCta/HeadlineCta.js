import React from 'react';
import { string, bool, number } from 'prop-types';
import classnames from 'classnames';
import { Link, graphql } from 'gatsby';
import Button from '../../common/Button';
import './headlineCta.scss';
import ConstrainedContent from '../../layout/ConstrainedContent';

const HeadlineCta = ({
  headline,
  subheader,
  preheader,
  buttonText,
  buttonLink,
  isCentered,
  backgroundColor,
  textColor,
  buttonColor,
  preheaderColor,
  isFullWidth,
  marginTop,
  marginBottom,
}) => {
  const isExternalLink = buttonLink && !!buttonLink.match(/^http/);
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
      className={classnames('headline-cta', {
        'headline-cta--centered': isCentered,
        'headline-cta--no-padding': !headline && !subheader && !preheader,
        'full-width': isFullWidth,
      })}
    >
      <ConstrainedContent>
        {preheader && (
          <h4
            style={{ color: preheaderColor }}
            className="headline-cta__preheader"
          >
            {preheader}
          </h4>
        )}
        {headline && (
          <h4 style={{ color: textColor }} className="headline-cta__headline">
            {headline}
          </h4>
        )}
        {subheader && (
          <p style={{ color: textColor }} className="headline-cta__subheader">
            {subheader}
          </p>
        )}
        {buttonLink && buttonText && (
          <Button
            tag={isExternalLink ? 'a' : Link}
            style={buttonColor ? { backgroundColor: buttonColor } : {}}
            color="brand"
            shape="rounded"
            to={buttonLink}
            href={buttonLink}
          >
            {buttonText}
          </Button>
        )}
      </ConstrainedContent>
    </div>
  );
};

HeadlineCta.propTypes = {
  headline: string,
  subheader: string,
  preheader: string,
  buttonText: string,
  buttonLink: string,
  isCentered: bool,
  backgroundColor: string,
  textColor: string,
  buttonColor: string,
  isFullWidth: bool,
  marginBottom: number,
  marginTop: number,
};

HeadlineCta.defaultProps = {
  backgroundColor: '#f3f6fe',
  textColor: '#747c90',
};

export default HeadlineCta;

export const HEADLINE_CTA_QUERY = graphql`
  fragment HeadlineCtaFields on ContentfulCtaHeadline {
    backgroundColor
    buttonColor
    preheaderColor
    buttonLink
    buttonText
    isCentered
    subheader
    textColor
    preheader
    headline
    isFullWidth
    marginTop
    marginBottom
  }
`;
