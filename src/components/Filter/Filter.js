import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ hanleFilterChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Find contacts by name:</h3>
      <input
        className={styles.input}
        type="text"
        onChange={e => hanleFilterChange(e.currentTarget.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  hanleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
