import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { changeFilterAction } from '../../redux/actions';

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

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  hanleFilterChange: filter => dispatch(changeFilterAction(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  hanleFilterChange: PropTypes.func.isRequired,
};
