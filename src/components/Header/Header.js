import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import fadeTransition from '../../transitions/fade.module.css';
import styles from './Header.module.css';

class Header extends Component {
  state = {
    isPageLoaded: false,
  };

  componentDidMount() {
    this.setState({
      isPageLoaded: true,
    });
  }

  render() {
    const { isPageLoaded } = this.state;

    return (
      <header className={styles.header}>
        <CSSTransition in={isPageLoaded} timeout={500} classNames={fadeTransition}>
          <h3 className={styles.title}>Phonebook</h3>
        </CSSTransition>
      </header>
    );
  }
}

export default Header;
