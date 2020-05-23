import React from 'react';
import propTypes from 'prop-types';
import styles from './PopUpNotification.module.css';

const popUpNotification = ({ title }) => (
  <div className={styles.container}>
    <p>{title}</p>
  </div>
);

popUpNotification.propTypes = {
  title: propTypes.string.isRequired,
};

export default popUpNotification;
