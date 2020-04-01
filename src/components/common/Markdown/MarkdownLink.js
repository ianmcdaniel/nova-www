import React from 'react';
import { string, node } from 'prop-types';

const MarkdownLink = ({ href, children }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
	);
};

MarkdownLink.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
};

export default MarkdownLink;
