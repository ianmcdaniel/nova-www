import classname from 'classnames';
import React, { useState } from 'react';
import Button from '../Button';
import { object } from 'prop-types';

import logo from '../../../assets/branding/logo-wordmark.png';
import redirectImg from '../../../assets/images/amex-card-ss.png';
import checkboxImg from '../../../assets/images/checkbox-ss.png';
import connectImg from '../../../assets/images/connect-ss.png';
import utils from '../../../utils';
import './AmexRedirect.scss';

export const EDUCATION_TABS = [
  {
    description:
      'Once there, click ‘Apply Now’ to begin your credit card application. Your credit record will not be checked at this stage.',
    header: 'In a moment, you’ll be redirected to the American Express website',
    img: {
      alt: 'American Express credit card overview page',
      src: redirectImg,
    },
    name: 'redirect',
  },
  {
    description:
      'This step lets American Express know that you would like to apply with your international credit history.',
    header:
      'On the application, select the checkbox shown below ‘Social Security Number’',
    img: {
      alt: 'American Express application Social Security Number checkbox',
      src: checkboxImg,
    },
    name: 'checkbox',
  },
  {
    description:
      'American Express will check your U.S. score first to see if it can be used to approve your application. If you do not have a U.S. credit score, you may be able to use Nova Credit to apply with your international credit history.',
    header:
      'After submitting your application, you may be redirected back to us',
    img: {
      alt: 'Nova Get Started page',
      src: connectImg,
    },
    name: 'connect',
  },
];

const AmexRedirect = ({ creditCard }) => {
  const [eduTabIdx, setEduTabIdx] = useState(0);

  const onBack = () => setEduTabIdx(eduTabIdx - 1);
  const onNext = () => setEduTabIdx(eduTabIdx + 1);
  const onRedirect = () => {
    const { apply_url: applyUrl } = creditCard;
    utils.redirect(applyUrl);
  };

  const { description, header, img } = EDUCATION_TABS[eduTabIdx];

  return (
    <article className="interstitial-edu-content">
      <header className="interstitial-edu-header">
        <a className="branding" href="https://www.novacredit.com">
          <img src={logo} width={169} alt="Nova Credit" />
        </a>
        <div className="interstitial-edu-progress">
          {EDUCATION_TABS.map(({ name }, i) => (
            <div
              className={classname('dot', { visited: eduTabIdx >= i })}
              key={name}
            />
          ))}
        </div>
      </header>
      <div className="edu-tab">
        <h1 className="title">{header}</h1>
        <img className="edu-tab-img" alt={img.alt} src={img.src} />
        <p className="subtitle muted">{description}</p>
      </div>
      <footer className="interstitial-edu-footer">
        <div className="interstitial-edu-footer-nav">
          {eduTabIdx !== 0 && (
            <Button
              className="nav-button back-button"
              onClick={onBack}
              variant="outline"
            >
              Back
            </Button>
          )}
          {eduTabIdx === EDUCATION_TABS.length - 1 ? (
            <Button className="nav-button" onClick={onRedirect} color="primary">
              Take me to American Express
            </Button>
          ) : (
            <Button className="nav-button" onClick={onNext} color="primary">
              Next
            </Button>
          )}
        </div>
      </footer>
      <div className="sub-footer">
        {eduTabIdx !== EDUCATION_TABS.length - 1 && (
          <Button onClick={onRedirect} variant="outline">
            Take me to American Express without instructions
          </Button>
        )}
      </div>
    </article>
  );
};

AmexRedirect.propTypes = {
  creditCard: object.isRequired,
};

export default AmexRedirect;
