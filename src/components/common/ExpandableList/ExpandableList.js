import React, { useState } from 'react';
import { arrayOf, string } from 'prop-types';

import Icon from '../Icon';

import './ExpandableList.scss';

const ExpandableList = ({ bullets }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const bulletsToDisplay = isExpanded ? bullets : bullets.slice(0, 1);

  return (
    <>
      <ul className="expandable-list muted">
        {bulletsToDisplay.map(bullet => (
          <li key={bullet}>
            <p>{bullet}</p>
          </li>
        ))}
      </ul>
      <a
        href="/"
        className="expandable-list__link"
        onClick={e => {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <>
            <Icon name="chevron-up" /> Show less
          </>
        ) : (
          <>
            <Icon name="chevron-down" /> Read more
          </>
        )}
      </a>
    </>
  );
};

ExpandableList.propTypes = {
  bullets: arrayOf(string),
};

ExpandableList.defaultProps = {
  bullets: [],
};

export default ExpandableList;
