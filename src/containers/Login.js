import { connect } from 'react-redux';
import { Login } from '../components/login'; 
import { login } from '../actions';

const mapStateToProps = state => ({
  users: state.Users,
})

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)