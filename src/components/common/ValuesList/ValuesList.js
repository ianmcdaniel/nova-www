import React from 'react';
import shoe from '../../../assets/images/values_shoe.png';
import train from '../../../assets/images/values_train.png';
import bridge from '../../../assets/images/values_bridge.png';
import ego from '../../../assets/images/values_ego.png';
import './valuesList.scss';

const VALUES = [
  {
    title: "Tie your neighbor's shoes",
    text: 'Play as a team, win as a team!',
    image: shoe,
  },
  {
    title: 'Chug like a train, soar like a plane',
    text: 'Be a go-getter and always ready to get your hands dirty!',
    image: train,
  },
  {
    title: 'Build bridges, not walls',
    text: 'We believe in supporting the traditionally disadvantaged.',
    image: bridge,
  },
  {
    title: 'Challenge without ego',
    text: "Don't let your ego get in the way of truth.",
    image: ego,
  },
];

const ValuesList = () => {
  return (
    <div className="values-list">
      {VALUES.map(({ title, text, image }) => (
        <div className="values-list__item" key={title}>
          <img className="values-list__icon" src={image} />
          <div className="values-list__text">
            <h4 className="values-list__heading">{title}</h4>
            <p className="values-list__content">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesList;
