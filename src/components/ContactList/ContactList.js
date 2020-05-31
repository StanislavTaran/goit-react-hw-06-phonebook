import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import slideTransition from '../../transitions/slide.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    contacts.length > 0 && (
      <div className={styles.container}>
        <h2 className={styles.title}>Contact list</h2>
        <TransitionGroup component="ul" className={styles.contactList}>
          {contacts.map(item => {
            return (
              <CSSTransition timeout={250} unmountOnExit classNames={slideTransition} key={item.id}>
                <li className={styles.contactItem}>
                  <ContactItem
                    contactItem={item}
                    onRemoveContact={() => onRemoveContact(item.id)}
                  />
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    )
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveContact: propTypes.func.isRequired,
};

export default ContactList;
