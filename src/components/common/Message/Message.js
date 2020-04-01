import React from 'react';
import { arrayOf, node, oneOfType, string } from 'prop-types';

import Icon from '../Icon';

import './Message.scss';

const Message = ({ children, icon, subtitle, title }) => (
  <div className="message text-center">
    <Icon className="message-icon" name={icon} variant="light" />
    {title && <h2 className="muted">{title}</h2>}
    {subtitle && <h4 className="message__subtitle muted">{subtitle}</h4>}
    {children}
  </div>
);

Message.propTypes = {
  icon: string.isRequired,
  children: oneOfType([arrayOf(node), node]),
  subtitle: string,
  title: string,
};

Message.defaultProps = {
  children: null,
  subtitle: '',
  title: '',
};

export default Message;
