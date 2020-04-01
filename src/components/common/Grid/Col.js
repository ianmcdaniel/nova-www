import React from 'react';
import { node, string, object } from 'prop-types';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

const Col = ({ children, className, size, offset, order, tag: Tag, ...attributes }) => {
	const sizeClasses = {
		col: isEmpty(size),
		'col-sm': size.sm === 'auto',
		'col-md': size.md === 'auto',
		'col-lg': size.lg === 'auto',
		[`col-sm-${size.sm}`]: size.sm,
		[`col-md-${size.md}`]: size.md,
		[`col-lg-${size.lg}`]: size.lg,
		[`col-${size.default}`]: size.default,
	};

	const offsetClasses = {
		[`offset-sm-${offset.sm}`]: offset.sm,
		[`offset-md-${offset.md}`]: offset.md,
		[`offset-lg-${offset.lg}`]: offset.lg,
		[`offset-${offset.default}`]: offset.default,
	};

	const orderClasses = {
		[`order-sm-${order.sm}`]: order.sm,
		[`order-md-${order.md}`]: order.md,
		[`order-lg-${order.lg}`]: order.lg,
		[`order-${order.default}`]: order.default,
	};
	return (
		<Tag
			className={classnames(className, sizeClasses, offsetClasses, orderClasses)}
			{...attributes}
		>
			{children}
		</Tag>
	);
};

Col.propTypes = {
	children: node.isRequired,
	className: string,
	tag: string,
	size: object,
	offset: object,
	order: object,
};

Col.defaultProps = {
	className: null,
	tag: 'div',
	size: {},
	offset: {},
	order: {},
};

export default Col;
