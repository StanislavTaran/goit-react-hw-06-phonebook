import { connect } from 'react-redux';
import ContactItem from './ContactItem';

import { deleteContactAction } from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContactAction(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
