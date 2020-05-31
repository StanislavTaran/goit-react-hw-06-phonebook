import React, { Component } from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './ContactForm/ContactFormContainer';
import ContactList from './ContactList/ContactListContainer';
import Filter from './Filter/FilterContainer';
import Header from './Header/Header';
import TabletShape from './TabletShape/TabletShape';
import PopUpNotification from './PopUpNotification/PopUpNotification';
import slideTransition from '../transitions/slide.module.css';
import slideReverseTransition from '../transitions/slide-reverse.module.css';

class App extends Component {
  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    const { loadContactsFromLS } = this.props;

    if (persistedContacts) {
      loadContactsFromLS(JSON.parse(persistedContacts));
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.props;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { contacts, isAlreadyinContacts } = this.props;

    return (
      <TabletShape>
        <Header />
        <CSSTransition
          in={isAlreadyinContacts}
          timeout={250}
          classNames={slideReverseTransition}
          unmountOnExit
        >
          <PopUpNotification title="Contact already exist!" />
        </CSSTransition>

        <ContactForm />
        <CSSTransition
          in={contacts.length > 1}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </TabletShape>
    );
  }
}

App.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
  isAlreadyinContacts: propTypes.bool.isRequired,
  loadContactsFromLS: propTypes.func.isRequired,
};

export default App;
