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

export default class AddDonor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   // if (this.props.username && this.props.username.trim().length > 0) {
  //   //   this.props.onSubmitForm();
  //   // }
  // }

  render() {
    const { loading, error, repos, message } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Ask Donation</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="askdonor-page">
          <section>
            <h2>Ask Donation{this.props.message}</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <div className="col-sm-12">
              Search Users:
              <Typeahead
                multiple
                placeholder="Search User"
                onChange={(selected) => {
                  
                }}
                options={[{
                  id:1, fullName: "John Miller", firstName: "John", lastName : "Miller", email: "john@email.com"
                },
                {
                  id:2, fullName: "Dolan Trump", firstName: "Dolan", lastName : "Trump", email: "dolan@email.com"
                },
                {
                  id:3, fullName: "Sam Dicosta", firstName: "Sam", lastName : "Dicosta", email: "sam@email.com"
                }]}
                filterBy={['firstName', 'lastName', 'email', 'fullName']}
                labelKey="fullName"
              />
              </div>
              <div className="col-sm-6">
                <div>Amount</div>
                <input
                  id="lastname"
                  type="number"
                  placeholder="Last Name"
                  value={this.props.lastname}
                />
                </div>
                <div class="col-sm-12">
             <div> Select Event </div>
              <select name="type" id="type" class="col-sm-6">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>

                </div>


<input
          type="submit"
          className="btn btn-primary float-right"
          value="Ask"/>
            </form>
          </section>
        </div>
      </article>
    );
  }
}

AddDonor.propTypes = {
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
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  type: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
