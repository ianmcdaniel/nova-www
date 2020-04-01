import React from 'react';
import { string, shape, bool } from 'prop-types';
import classnames from 'classnames';
import { graphql } from 'gatsby';
import './headlineBlock.scss';

const HeadlineBlock = ({ preheader, header, lead, center }) => {
  return (
    <div
      className={classnames('headline-block', {
        'headline-block--centered': center,
      })}
    >
      {preheader && <h4 className="preheader">{preheader}</h4>}
      {header && <h1 className="title">{header}</h1>}
      {lead && <p className="subheader">{lead.subheader}</p>}
    </div>
  );
};

HeadlineBlock.propTypes = {
  preheader: string,
  header: string,
  lead: shape({
    subheader: string,
  }),
  center: bool,
};

export default HeadlineBlock;
export const HEADLINE_BLOCK_QUERY = graphql`
  fragment HeadlineBlockFields on ContentfulBlockHeadline {
    preheader
    id
    header
    lead: subheader {
      subheader
    }
    center
  }
`;
