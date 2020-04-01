import React, { useState } from 'react';
import kevin from './images/kevin.png';
import betsy from './images/betsy.png';
import cynthia from './images/cynthia.png';
import rightArrow from './images/arrow_right.svg';
import leftArrow from './images/arrow_left.svg';

import './spotlight.scss';

const SPOTLIGHT_DATA = [
  {
    name: 'Kevin',
    title: 'Marketing',
    image: kevin,
    text: [
      `"As a German immigrant to the U.S. I face the problem of lacking domestic credit history myself, meaning I’m helping to solve my own problem!`,
      `What I love most about Nova are its authentic people and that we’re facing one of the toughest business challenges that I’ve seen."`,
    ],
  },
  {
    name: 'Betsy',
    title: 'Customer Success',
    image: betsy,
    text: [
      `"I joined Nova because I care deeply about financial inclusion, and enabling broader access to credit history is one of the most powerful ways to achieve that.`,
      `My favorite part about working at Nova is hearing from our customers to gain an understanding of how Nova can support their goals and help them grow."`,
    ],
  },
  {
    name: 'Cynthia',
    title: 'International Partnerships',
    image: cynthia,
    text: [
      `"I've dedicated my career to promoting financial inclusion in emerging markets, and am thrilled to continue that thread at Nova by ensuring that immigrants can access quality financial services in their new home country.`,
      `I joined Nova because I believe that this is the right team to solve this complex problem, and because working with these people each day makes me smarter and better (and makes me laugh!)."`,
    ],
  },
];

const Spotlight = () => {
  const tab_limit = SPOTLIGHT_DATA.length - 1;
  const [activeTab, setActiveTab] = useState(0);
  const { name, title, image, text } = SPOTLIGHT_DATA[activeTab];

  const handelForward = () => {
    activeTab === tab_limit ? setActiveTab(0) : setActiveTab(activeTab + 1);
  };

  const handleBack = () => {
    activeTab === 0 ? setActiveTab(tab_limit) : setActiveTab(activeTab - 1);
  };
  return (
    <div className="spotlight">
      <h2 className="spotlight__title">Spotlight</h2>
      <div className="spotlight__slider">
        <div className="spotlight__arrow-container">
          <div className="spotlight__arrow" onClick={handleBack}>
            <img src={leftArrow} />
          </div>
        </div>

        <div className="spotlight__main-content">
          <div className="spotlight__picture">
            <img src={image} />
            <h4>{name}</h4>
            <p>{title}</p>
          </div>
          <div className="spotlight__text">
            {text.map((item, idx) => (
              <p key={idx}>
                <em>{item}</em>
              </p>
            ))}
            <div className="spotlight__divider">
              <div className="spotlight__divider-icon">"</div>
            </div>
          </div>
        </div>

        <div className="spotlight__arrow-container">
          <div className="spotlight__arrow" onClick={handelForward}>
            <img src={rightArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
