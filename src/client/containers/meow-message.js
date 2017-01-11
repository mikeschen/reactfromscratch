import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.cat.get('hasMeowed') ? 'The cat meowed' : 'The cat did not meow',
});

export default connect(mapStateToProps)(Message);
