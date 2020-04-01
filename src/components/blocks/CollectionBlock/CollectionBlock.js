import React from 'react';
import { string, array, bool } from 'prop-types';
import { graphql, Link } from 'gatsby';
import classnames from 'classnames';
import ProductTabsBlock from '../ProductTabsBlock';
import ArticleGridBlock from '../ArticleGridBlock';
import { Container } from '../../common/Grid';
import Button from '../../common/Button';
import './collectionBlock.scss';

const COMPONENT_MAP = {
  productTabs: ProductTabsBlock,
  articleGrid: ArticleGridBlock,
};

const CollectionBlock = ({
  type,
  preheader,
  title,
  items,
  subheader,
  buttonText,
  buttonLink,
  backgroundColor,
  isCentered,
}) => {
  const Component = COMPONENT_MAP[type];

  return (
    <div
      className="collection full-width"
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <div
          className={classnames('collection__header', {
            'collection__header--centered': isCentered,
          })}
        >
          {preheader && <h4 className="preheader">{preheader}</h4>}
          {title && <h1 className="title collection__title">{title}</h1>}
          {subheader && <p className="collection__subheader">{subheader}</p>}
        </div>
        {Component && <Component items={items} />}
        {buttonLink && buttonText && (
          <div className="collection__footer">
            <Button tag={Link} to={buttonLink} shape="rounded" color="brand">
              {buttonText}
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

CollectionBlock.propTypes = {
  type: string,
  preheader: string,
  subheader: string,
  buttonLink: string,
  buttonText: string,
  backgroundColor: string,
  title: string,
  isCentered: bool,
  items: array,
};

export default CollectionBlock;

export const COLLECTION_QUERY = graphql`
  fragment CollectionFields on ContentfulBlockCollection {
    type
    preheader
    subheader
    buttonText
    buttonLink
    backgroundColor
    title
    isCentered
    items {
      ...ProductTabsFields
      ...ArticleGridFields
    }
  }
`;
