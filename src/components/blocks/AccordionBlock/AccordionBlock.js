import React, { useState, useRef } from 'react';
import { string, shape, oneOfType } from 'prop-types';
import { graphql } from 'gatsby';
import Markdown from '../../common/Markdown';
import Icon from '../../common/Icon';
import './accordionBlock.scss';

const AccordionBlock = ({ headline, content }) => {
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentHeight = useRef(null);
  const accordionContent =
    typeof content === 'string' ? content : content.content;

  const toggleAccordion = () => {
    setOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${contentHeight.current.scrollHeight}px`);
  };

  return (
    <div className="accordion">
      <div className="accordion__toggle" onClick={toggleAccordion}>
        <h4 className="accordion__headline">
          <strong>{headline}</strong>
        </h4>
        <Icon className="accordion__indicator" name="chevron-down" />
      </div>

      <div
        ref={contentHeight}
        className="accordion__content"
        style={{ maxHeight: height }}
      >
        <Markdown content={accordionContent} />
      </div>
    </div>
  );
};

AccordionBlock.propTypes = {
  headline: string.isRequired,
  content: oneOfType([
    string,
    shape({
      content: string,
    }),
  ]).isRequired,
};

export default AccordionBlock;

export const ACCORDION_QUERY = graphql`
  fragment AccordionFields on ContentfulBlockAccordion {
    id
    headline
    content {
      content
    }
  }
`;
