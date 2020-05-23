import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Header from './Header/Header';
import TabletShape from './TabletShape/TabletShape';
import PopUpNotification from './PopUpNotification/PopUpNotification';
import slideTransition from '../transitions/slide.module.css';
import slideReverseTransition from '../transitions/slide-reverse.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isAlreadyinContacts: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  hasContact = name => {
    const { contacts } = this.state;
    return contacts.some(item => item.name.toLowerCase() === name.toLowerCase());
  };

  addToContacts = ({ name, number }) => {
    const isAlreadyinContacts = this.hasContact(name);

    if (isAlreadyinContacts) {
      this.setState({
        isAlreadyinContacts: true,
      });
    } else {
      const contact = {
        name,
        number,
        id: uuidv4(),
      };
      this.setState(state => {
        return { contacts: [...state.contacts, contact] };
      });
    }
  };

  removeContact = id => {
    this.setState(state => {
      const contacts = state.contacts.filter(contact => contact.id !== id);
      const filter = contacts.length > 1 ? state.filter : '';
      return { contacts, filter };
    });
  };

  hanleFilterChange = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  applyFilter() {
    const { contacts, filter } = this.state;

    return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    const { contacts, isAlreadyinContacts } = this.state;

    const filteredContacts = this.applyFilter();

    return (
      <TabletShape>
        <Header />
        <CSSTransition
          in={isAlreadyinContacts}
          timeout={250}
          classNames={slideReverseTransition}
          unmountOnExit
          onEntered={() => {
            setTimeout(() => {
              this.setState(() => {
                return {
                  isAlreadyinContacts: false,
                };
              });
            }, 2000);
          }}
        >
          <PopUpNotification title="Contact already exist!" />
        </CSSTransition>

        <ContactForm onAddContact={this.addToContacts} />
        <CSSTransition
          in={contacts.length > 1}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <Filter hanleFilterChange={this.hanleFilterChange} />
        </CSSTransition>
        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <ContactList contacts={filteredContacts} onRemoveContact={this.removeContact} />
        </CSSTransition>
      </TabletShape>
    );
  }
}
