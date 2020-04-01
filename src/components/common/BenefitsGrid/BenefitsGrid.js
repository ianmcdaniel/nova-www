import React from 'react';
import commuter from './images/commuter.png';
import development from './images/development.png';
import home from './images/home.png';
import lunch from './images/lunch.png';
import medical from './images/medical.png';
import phonebill from './images/phonebill.png';
import pto from './images/pto.png';
import travel from './images/travel.png';
import workout from './images/workout.png';
import retirement from './images/401k.png';
import './benefitsGrid.scss';

const BENEFITS = [
  {
    name: 'medical',
    image: medical,
    text:
      'Medical, Dental, and Vision are 99% subsidized for Nova Credit employees, and 50% for dependents',
  },
  {
    name: 'retirement',
    image: retirement,
    text: 'Nova Credit sponsored 401K plan',
  },
  {
    name: 'travel',
    image: travel,
    text:
      'On each work anniversary, Nova Credit will reimburse the cost of a roundtrip economy ticket to any destination in the world',
  },
  {
    name: 'pto',
    image: pto,
    text: 'Unlimited vacation policy',
  },
  {
    name: 'development',
    image: development,
    text: '$1500/year professional development budget',
  },
  {
    name: 'commuter',
    image: commuter,
    text: '$75/month contribution by Nova towards commuter benefits',
  },
  {
    name: 'lunch',
    image: lunch,
    text: 'Catered lunch on Mondays, Wednesdays, and Fridays',
  },
  {
    name: 'workout',
    image: workout,
    text: 'Monthly team workouts',
  },
  {
    name: 'phonebill',
    image: phonebill,
    text: '$50/month contribution by Nova Credit towards your cell phone bill',
  },
  {
    name: 'home',
    image: home,
    text: 'Flexible working arrangements',
  },
];

const BenefitsGrid = () => {
  return (
    <div className="benefits">
      <h4 className="preheader">BE THE BEST YOU INSIDE AND OUTSIDE OF WORK</h4>
      <h2 className="title">Employment Benefits</h2>
      <p className="benefits__text">
        Our benefits will help you be the best "you" inside and outside of work.
      </p>
      <div className="benefits__grid">
        {BENEFITS.map(({ name, image, text }) => (
          <div className="benefits__benefit" key={name}>
            <img className="benefits__img" src={image} />
            <p className="benefits__text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsGrid;
