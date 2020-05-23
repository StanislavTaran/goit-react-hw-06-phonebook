import React from 'react';
import propTypes from 'prop-types';
import styles from './TabletShape.module.css';

const TabletShape = ({ children }) => {
  return <div className={styles.screen}>{children}</div>;
};

export default TabletShape;

TabletShape.defaultProps = {
  children: null,
};

TabletShape.propTypes = {
  children: propTypes.node,
};
