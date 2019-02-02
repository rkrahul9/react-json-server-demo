import { connect } from 'react-redux';
import { Achievements } from '../components/achievements'; 

const mapStateToProps = state => ({
  users: state.Users,
})

export default connect(
  mapStateToProps,
  null
)(Achievements)