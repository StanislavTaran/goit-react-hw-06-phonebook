import { connect } from 'react-redux';
import { addContactAction } from '../../redux/actions';
import { toogleExistFlag } from '../../redux/operations';
import { getAllContacts } from '../../redux/selectors';
import ContactForm from './ContactForm';

const mapStateToProps = state => {
  return {
    contacts: getAllContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, number) => dispatch(addContactAction(name, number)),
    showNotification: () => dispatch(toogleExistFlag()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
