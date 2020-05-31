import { connect } from 'react-redux';
import ContactList from './ContactList';
import { deleteContactAction } from '../../redux/actions';
import { getFilteredContacts } from '../../redux/selectors';

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(deleteContactAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
