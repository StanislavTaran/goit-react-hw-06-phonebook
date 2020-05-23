import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { validateAll } from 'indicative/validator';
import Notification from '../Notification/Notification';
import styles from './ContactForm.module.css';

const rules = {
  name: 'required | string',
  number: 'required|min:2',
};

const messages = {
  'name.required': 'Please choose a name for contact',
  'number.required': 'Please enter a number',
  'number.min': 'Number must be at least 2 characters',
};

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: propTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    errors: null,
    isPageLoaded: false,
  };

  InputNameId = uuidv4();

  InputNuberId = uuidv4();

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    let replaceValue = value;

    if (name === 'number') {
      replaceValue = value.replace(/[^\d]/g, '');

      const regex = /^([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g;
      const match = regex.exec(replaceValue);
      if (match) {
        match.shift();
        replaceValue = match.join('-');
      }
    }

    this.setState({
      [name]: replaceValue,
    });
  };

  handleSubmit = e => {
    const { onAddContact } = this.props;
    e.preventDefault();

    validateAll(this.state, rules, messages)
      .then(() => {
        onAddContact({ ...this.state });
        this.reset();
      })
      .catch(errors => {
        const formatedErrors = {};

        errors.forEach(error => {
          formatedErrors[error.field] = error.message;
        });
        this.setState({
          errors: formatedErrors,
        });
      });
  };

  reset = () => {
    this.setState({ name: '', number: '', errors: null });
  };

  render() {
    const { name, number, errors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div>
            <label htmlFor={this.InputNameId}>Name:</label>
            <input
              className={styles.input}
              name="name"
              id={this.InputNameId}
              type="text"
              onChange={this.handleChange}
              value={name}
              autoComplete="off"
              maxLength={20}
            />
            {errors && <Notification title={errors.name} />}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor={this.InputNuberId}>Number:</label>
            <input
              className={styles.input}
              name="number"
              id={this.InputNuberId}
              type="text"
              onChange={this.handleChange}
              value={number}
              autoComplete="off"
              maxLength={10}
            />
            {errors && <Notification title={errors.number} />}
          </div>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
