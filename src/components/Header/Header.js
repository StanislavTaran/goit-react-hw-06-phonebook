import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import fadeTransition from '../../transitions/fade.module.css';
import styles from './Header.module.css';

const Header = () => {
  const [state, setstate] = useState({
    isPageLoaded: false,
  });

  useEffect(() => {
    setstate({ isPageLoaded: true });
  }, []);

  return (
    <header className={styles.header}>
      <CSSTransition in={state.isPageLoaded} timeout={500} classNames={fadeTransition}>
        <h3 className={styles.title}>Phonebook</h3>
      </CSSTransition>
    </header>
  );
};

export default Header;
