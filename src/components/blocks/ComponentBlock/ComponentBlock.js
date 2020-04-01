import React from 'react';
import { string, object } from 'prop-types';
import { graphql } from 'gatsby';
import { getComponent } from '../../../utils';

const ComponentBlock = ({ type, title, text }) => {
  const Component = getComponent(type);
  const subheader = text ? text.subheader : null;

  return Component ? (
    <Component title={title} subheader={subheader} type={type} />
  ) : null;
};

ComponentBlock.propTypes = {
  type: string,
  title: string,
  text: object,
};

export default ComponentBlock;

export const COMPONENT_QUERY = graphql`
  fragment ComponentFields on ContentfulBlockComponent {
    type
    id
    title
    text: subheader {
      subheader
    }
  }
`;
