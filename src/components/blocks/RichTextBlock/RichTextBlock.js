import React from 'react';
import { object, string } from 'prop-types';
import { graphql } from 'gatsby';
import { Row, Col } from '../../common/Grid';
import RichText from '../../common/RichText';
import './richTextBlock.scss';

const RichTextBlock = ({ content, preheader, title, subheader }) => {
  return (
    <Row>
      <Col size={{ md: 8 }} offset={{ md: 2 }}>
        {(preheader || title || subheader) && (
          <div className="rich-text-block__header">
            {preheader && <p className="preheader">{preheader}</p>}
            {title && <h1 className="title">{title}</h1>}
            {subheader && <p className="subheader">{subheader}</p>}
          </div>
        )}
        <RichText {...content} />
      </Col>
    </Row>
  );
};

RichTextBlock.propTypes = {
  content: object,
  preheader: string,
  title: string,
  subheader: string,
};

export default RichTextBlock;

export const RICH_TEXT_BLOCK_FIELDS = graphql`
  fragment RichTextBlockFields on ContentfulBlockRichText {
    id
    subheader
    title
    preheader
    content {
      json
    }
  }
`;
