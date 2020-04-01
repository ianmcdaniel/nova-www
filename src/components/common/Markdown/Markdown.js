import React from 'react';
import { string } from 'prop-types';
import MarkdownJSX from 'markdown-to-jsx';

import MarkdownLink from './MarkdownLink';

const options = {
	overrides: {
		a: { component: MarkdownLink },
	},
};

const Markdown = ({ content }) => {
  return (
    <MarkdownJSX options={options}>
      {content}
    </MarkdownJSX>
  );
};

Markdown.propTypes = {
  content: string.isRequired,
};

export default Markdown;
