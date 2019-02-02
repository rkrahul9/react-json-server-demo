import { connect } from 'react-redux';
import { Account } from '../components/accounts';
import { updateUser } from '../actions'; 

const mapStateToProps = state => ({
  users: state.Users,
})

const mapDispatchToProps = {
  updateUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)