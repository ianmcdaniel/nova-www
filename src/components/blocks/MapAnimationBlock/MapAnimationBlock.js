import React, { useEffect, useRef } from 'react';
import { bool, shape, string } from 'prop-types';
import Lottie from 'lottie-web';
import { Container, Row, Col } from '../../common/Grid';
import Map from '../../../assets/animations/map.json';
import CountryNavigator from '../../common/CountryNavigator';
import './mapAnimation.scss';

const MapAnimationBlock = ({ title, subheader, type }) => {
  const animationContainer = useRef();
  const showCountries = type === 'mapAnimation';
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: animationContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: Map,
    });
    return () => animation.destroy();
  }, []);
  return (
    <div className="map-animation full-width">
      <Container>
        {(title || subheader) && (
          <div className="map-animation__header">
            {title && <h1 className="title">{title}</h1>}
            {subheader && <p className="subheader">{subheader}</p>}
          </div>
        )}
        <Row>
          <Col size={{ lg: showCountries ? 10 : 12 }}>
            <div ref={animationContainer} />
          </Col>
          {showCountries && (
            <Col size={{ lg: 2 }}>
              <p className="map-animation__country-lead">Where are you from?</p>
              <CountryNavigator type="list" />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

MapAnimationBlock.propTypes = {
  data: shape({
    showCountries: bool,
    title: string,
    subheader: string,
  }),
};

export default MapAnimationBlock;
