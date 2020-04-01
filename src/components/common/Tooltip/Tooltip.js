import React from 'react';
import { arrayOf, node, oneOfType, string } from 'prop-types';

import { Tooltip as TippyTooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const Tooltip = (props) => (
	<TippyTooltip html={props.content} {...props}>
		{props.tooltipTrigger}
	</TippyTooltip>
);

Tooltip.propTypes = {
	/** The content that represents the tooltip - this is usually an image but can be anything renderable by `React` - a string, any number of components, etc. */
	tooltipTrigger: oneOfType([arrayOf(node), node]).isRequired,
	/** The html that goes inside the tooltip when it shows. Can also be anything renderable by `React` */
	content: oneOfType([arrayOf(node), node]).isRequired,
	/** Option classname for the tooltip */
	className: string,
};

export default Tooltip;
