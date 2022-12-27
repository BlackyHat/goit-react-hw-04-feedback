import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMsg } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationMsg>{message}</NotificationMsg>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
