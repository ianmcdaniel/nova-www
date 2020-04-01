import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from '../../common/Grid';
import SocialLinks from '../../common/SocialLinks';
import ArriveSignup from '../../common/ArriveSignup';
import './footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <Row className="footer__top-grid">
          <Col size={{ md: 2 }}>
            <h5 className="footer__column-header">Nova Credit</h5>
            <div className="footer__column-item">
              <Link to="/">Arrive and Thrive</Link>
            </div>
          </Col>
          <Col size={{ md: 3 }}>
            <h5 className="footer__column-header">Resources</h5>
            <div className="footer__column-item">
              <Link to="/resources/the-best-credit-cards-for-people-with-no-credit-history">
                Credit cards for no credit
              </Link>
            </div>
            <div className="footer__column-item">
              <Link to="/resources/how-to-build-credit-in-the-u-s">
                How to build credit
              </Link>
            </div>
            <div className="footer__column-item">
              <Link to="/resources/best-credit-cards-for-non-us-citizens">
                Best credit cards for newcomers
              </Link>
            </div>
            <div className="footer__column-item">
              <Link to="/resources/how-to-transfer-your-credit-score">
                How to use your international credit
              </Link>
            </div>
            <div className="footer__column-item">
              <a href="https://help.novacredit.com">Help center</a>
            </div>
          </Col>
          <Col size={{ md: 2 }}>
            <h5 className="footer__column-header">Company</h5>
            <div className="footer__column-item">
              <Link to="/about">About us</Link>
            </div>
            <div className="footer__column-item">
              <Link to="/careers">Careers</Link>
            </div>
            <div className="footer__column-item">
              <Link to="/contact">Contact us</Link>
            </div>
            <div className="footer__column-item">
              <Link to="/press">Press</Link>
            </div>
            <div className="footer__column-item">
              <Link to="/blog">Corporate blog</Link>
            </div>
            <div className="footer__column-item">
              <Link to="/disputes">Disputes</Link>
            </div>
          </Col>
          <Col size={{ md: 4 }} offset={{ md: 1 }}>
            <ArriveSignup />
          </Col>
        </Row>
        <Row className="footer__bottom-grid">
          <Col className="footer__bottom-col" size={{ md: 3 }}>
            &copy; Copyright {year} Nova Credit Inc.
          </Col>
          <Col className="footer__bottom-col" size={{ md: 4 }}>
            <Link className="footer__legal-link" to="/tos">
              Terms of Service
            </Link>
            <Link className="footer__legal-link" to="/privacy">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="footer__legal-link">
              Cookie Policy
            </Link>
          </Col>
          <Col
            className="footer__bottom-col"
            size={{ md: 2 }}
            offset={{ sm: 3 }}
          >
            <SocialLinks />
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
