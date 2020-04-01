import React, { useState } from 'react';
import classnames from 'classnames';
import { arrayOf, node, oneOfType } from 'prop-types';

import Icon from '../Icon';

import './HamburgerMenu.scss';

const HamburgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const className = isOpen ? 'hamburger-menu-open' : 'hamburger-menu-closed';

  return (
    <div className={classnames('hamburger-menu', { open: isOpen })}>
      {isOpen && (
        <div className="hamburger-overlay" onClick={() => setIsOpen(!isOpen)} />
      )}
      <div className={className}>{children}</div>
      <button
        className="hamburger-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Toggle navigation menu"
        type="button"
      >
        <Icon variant="light" name="bars" as="small" />
      </button>
    </div>
  );
};

HamburgerMenu.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default HamburgerMenu;
