import { connect } from 'react-redux';
import { Signup } from '../components/signup'; 
import { signup } from '../actions';

const mapStateToProps = state => ({
  users: state.Users,
})

const mapDispatchToProps = {
  signup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)