import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLogin
} from 'containers/App/selectors';
import reducer from '../../containers/HomePage/reducer';
import saga from '../../containers/HomePage/saga';
import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loginUser(evt.target[0].form.username.value));
  }
});

const mapStateToProps = createStructuredSelector({
  username: makeSelectLogin()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(withReducer, withSaga, withConnect)(Header);
export { mapDispatchToProps };
