import React from 'react';
import { Link } from 'gatsby';
import Button from '../../common/Button';
import { Container } from '../../common/Grid';
import logo from '../../../assets/images/Wordmark.png';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav role="navigation">
      <Container className="container--nav">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">
              <img
                className="navigation__logo"
                src={logo}
                alt="Nova Credit Logo"
              />
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/resources/">Guides &amp; Resources</Link>
          </li>
          <li className="navigation__item">
            <Link to="/business/">For Business</Link>
          </li>
          <li className="navigation__item navigation__item--button">
            <Link to="/cards/">
              <Button shape="rounded" color="brand">
                Explore Credit Cards
              </Button>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
