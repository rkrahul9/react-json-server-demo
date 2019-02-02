import { connect } from 'react-redux';
import App from '../App';
import { getUser, getUserList } from '../actions';  

const mapStateToProps = state => ({
  users: state.Users,
  userList: state.UserList,
})

const mapDispatchToprops = {
  getUser,
  getUserList,
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(App)