import { connect } from 'react-redux';
import { BalanceSheet } from '../components/balance_sheet'; 

const mapStateToProps = state => ({
  users: state.Users,
})

export default connect(
  mapStateToProps,
  null
)(BalanceSheet)