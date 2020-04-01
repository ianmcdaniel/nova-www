import React from 'react';
import { object } from 'prop-types';
import { Col, Row } from '../Grid';
import Icon from '../Icon';
import './iconList.scss';

const IconList = () => {
  const items = [
    { text: 'Credit cards', icon: 'credit-card' },
    { text: 'Phone Plans', icon: 'mobile' },
    { text: 'Apartment Rentals', icon: 'building' },
    { text: 'Student Loans', icon: 'graduation-cap' },
  ];
  return (
    <div className="icon-list">
      <Row>
        {items.map(item => {
          return (
            <Col key={item.text} size={{ sm: 6 }}>
              <div className="icon-list__item">
                <div className="icon-list__icon-wrapper">
                  <Icon name={item.icon} />
                </div>{' '}
                <span className="icon-list__text">{item.text}</span>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

IconList.propTypes = {
  data: object,
};

export default IconList;
