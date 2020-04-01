import classnames from 'classnames';
import React from 'react';
import { element, func, node, oneOfType, string, array } from 'prop-types';

import './Heading.scss';

const Heading = ({ className, subtitle, subtitleAs: Subtitle, title, titleAs: Title, disclosure }) => (
	<header className={classnames('text-header', className)}>
		<Title className="title">{title}</Title>
		{// can accept multiple subtitles, which will be displayed with a newline between each. If arguments are
		// just passed as as singular strings, only one subtitle will be shown.
		subtitle && Array.isArray(subtitle)
			? subtitle.map(elem => <Subtitle key={elem.props.children} className="subtitle">{elem}</Subtitle>)
			: subtitle && <Subtitle className="subtitle">{subtitle}</Subtitle>
		}
		{disclosure && (
			<div className="disclosure">{disclosure}</div>
		)}
	</header>
);

Heading.propTypes = {
	className: string,
	disclosure: string,
	subtitle: oneOfType([string, array]),
	subtitleAs: oneOfType([element, func, node, string]),
	title: string.isRequired,
	titleAs: oneOfType([element, func, node, string]),
};

Heading.defaultProps = {
	className: '',
	disclosure: null,
	subtitle: null,
	subtitleAs: 'p',
	titleAs: 'h1',
};

export default Heading;
