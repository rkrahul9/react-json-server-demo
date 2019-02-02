import { connect } from 'react-redux';
import { Portfolio } from '../components/portfolio'; 

const mapStateToProps = state => ({
  users: state.Users,
})

export default connect(
  mapStateToProps,
  null
)(Portfolio)