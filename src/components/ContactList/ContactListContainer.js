import { connect } from 'react-redux';
import ContactList from './ContactList';
import { deleteContactAction } from '../../redux/actions';

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
