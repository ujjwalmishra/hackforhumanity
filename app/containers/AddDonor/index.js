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
import { addDonor } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername, makeSelectDonorAdded } from './selectors';
import reducer from './reducer';
import saga from './saga';
import AddDonor from './AddDonor';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    console.log(evt.target[0].form.firstname.value);
    let data = new FormData(evt.target[0].form.lastname);
    console.log(data);
    dispatch(addDonor(data));
  }
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectDonorAdded()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'adddonor', reducer });
const withSaga = injectSaga({ key: 'adddonor', saga });

export default compose(withReducer, withSaga, withConnect)(AddDonor);
export { mapDispatchToProps };
