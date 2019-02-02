import { connect } from 'react-redux';
import { Dashboard } from '../components/dashboard'; 

const mapStateToProps = state => ({
  userList: state.UserList,
})

export default connect(
  mapStateToProps,
  null
)(Dashboard)