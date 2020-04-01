import React from 'react';
import { Link } from 'gatsby';
import { arrayOf, boolean, shape, string } from 'prop-types';

import Icon from '../Icon';

import './Breadcrumbs.scss';

const Breadcrumbs = ({ crumbs, queryString }) => (
  <ul className="breadcrumbs">
    <li className="breadcrumb-item">
      <Link to="/">Home</Link>
    </li>
    {crumbs.map(({ isActive, title, url }) => {
      const className = isActive ? 'breadcrumb-item active' : 'breadcrumb-item';

      return (
        <li className={className} key={title}>
          <Icon name="caret-right" className="breadcrumb-item-caret" />
          {isActive && title}
          {!isActive && <Link to={`${url}${queryString}`}>{title}</Link>}
        </li>
      );
    })}
  </ul>
);

Breadcrumbs.propTypes = {
  crumbs: arrayOf(
    shape({
      isActive: boolean,
      title: string.isRequired,
      url: string,
    })
  ),
  queryString: string,
};

Breadcrumbs.defaultProps = {
  crumbs: [],
  queryString: '',
};

export default Breadcrumbs;
