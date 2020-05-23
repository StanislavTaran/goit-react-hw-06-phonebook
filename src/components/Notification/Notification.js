import React from 'react';
import propTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ title }) => <span className={styles.Notification}>{title}</span>;

Notification.defaultProps = {
  title: null,
};

Notification.propTypes = {
  title: propTypes.string,
};

export default Notification;
