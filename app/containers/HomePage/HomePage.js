/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section>
            <h2>Login/Registration</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
              Username:
                <input
                  id="username"
                  type="text"
                  placeholder="Erica"
                  name="username"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
              <label htmlFor="password">
              Password:
                <input
                  id="password"
                  type="password"
                  value={this.props.password}
                  onChange={this.props.onChangepassword}
                />
              </label>
              <input
                type="submit"
                className="btn btn-primary float-right"
                value="Submit" />
            </form>
            <ReposList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
