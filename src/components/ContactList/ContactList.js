import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteContactAction } from '../../redux/actions';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import slideTransition from '../../transitions/slide.module.css';

const ContactList = ({ contacts, onRemoveContact, filter }) => {
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    filteredContacts.length > 0 && (
      <div className={styles.container}>
        <h2 className={styles.title}>Contact list</h2>
        <TransitionGroup component="ul" className={styles.contactList}>
          {filteredContacts.map(item => {
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
  filter: propTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(deleteContactAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
