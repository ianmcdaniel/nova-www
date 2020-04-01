import React from 'react';
import { string } from 'prop-types';
import Button from '../../common/Button';
import { Link } from 'gatsby';
import './logoCta.scss';

const LogoCta = ({
  text,
  buttonText,
  buttonLink,
  backgroundColor,
  textColor,
  buttonColor,
  logoUrl,
}) => {
  const isExternalLink = !!buttonLink.match(/^http/);
  return (
    <div style={{ backgroundColor: backgroundColor }} className="logo-cta">
      {text && (
        <p style={{ color: textColor }} className="logo-cta__text">
          {text}
        </p>
      )}
      <div className="logo-cta__bottom-row">
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
        {logoUrl && <img className="logo-cta__logo" src={logoUrl} />}
      </div>
    </div>
  );
};

LogoCta.propTypes = {
  text: string,
  buttonText: string,
  buttonLink: string,
  backgroundColor: string,
  textColor: string,
  buttonColor: string,
  logoUrl: string,
};

LogoCta.defaultProps = {
  backgroundColor: '#f3f6fe',
  textColor: '#455d7e',
};

export default LogoCta;
