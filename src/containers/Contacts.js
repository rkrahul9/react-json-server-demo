import { connect } from 'react-redux';
import { Contacts } from '../components/contacts'; 
import { filterUser, getUserList } from '../actions';

const mapStateToProps = state => ({
  users: state.Users,
  userList: state.UserList,
})

const mapDispatchToProps = {
  filterUser,
  getUserList,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)