import { connect } from 'react-redux';
import { loadPersistedContacts } from '../redux/actions';
import { getAllContacts, getExistContactFlag } from '../redux/selectors';
import App from './App';

const mapStateToProps = state => {
  return {
    contacts: getAllContacts(state),
    isAlreadyinContacts: getExistContactFlag(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadContactsFromLS: contacts => dispatch(loadPersistedContacts(contacts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
