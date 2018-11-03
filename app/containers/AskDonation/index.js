import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { askDonation } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername, makeSelectDonorAdded } from './selectors';
import reducer from './reducer';
import saga from './saga';
import AskDonation from './AskDonation';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    
    dispatch(askDonation());
  }
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectDonorAdded()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'askdonation', reducer });
const withSaga = injectSaga({ key: 'askdonation', saga });

export default compose(withReducer, withSaga, withConnect)(AskDonation);
export { mapDispatchToProps };
