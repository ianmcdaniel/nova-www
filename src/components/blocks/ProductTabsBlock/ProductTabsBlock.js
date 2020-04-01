import React, { useState } from 'react';
import { array } from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import classnames from 'classnames';
import { Row, Col } from '../../common/Grid';
import Icon from '../../common/Icon';
import './productTabs.scss';

const ProductTabsBlock = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);
  const selected = items[activeTab];
  return (
    <div className="product-tabs">
      <Row className="product-tabs__content">
        <Col size={{ lg: 3 }} className="product-tabs__options">
          {items.map(({ name, id, icon }, index) => {
            return (
              <div
                onClick={() => setActiveTab(index)}
                className={classnames('product-tabs__row', {
                  'product-tabs__row--active': activeTab === index,
                })}
                key={id}
              >
                <span className="product-tabs__name">{name}</span>
                <div className="product-tabs__icon">
                  <Icon variant="light" name={icon} />
                </div>
              </div>
            );
          })}
        </Col>
        <Col size={{ lg: 9 }} className="pl-5">
          <Row>
            <Col size={{ lg: 6 }}>
              <p className="product-tabs__headline">{selected.headline}</p>
              <p className="product-tabs__text">{selected.text.text}</p>
            </Col>
            <Col size={{ lg: 6 }}>
              <Img fluid={selected.image.fluid} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

ProductTabsBlock.propTypes = {
  items: array,
};

export default ProductTabsBlock;

export const PRODUCT_TABS_QUERY = graphql`
  fragment ProductTabsFields on ContentfulElementProductTab {
    id
    icon
    headline
    name
    text {
      text
    }
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`;
