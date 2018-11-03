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
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }

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
          <title>Add Donor</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="donor-page col-sm-6 offset-sm-3">
          <section>
            <h2>Add Donor{this.props.message}</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="firstname">
First Name
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={this.props.firstname}
                />
              </label>
              <label htmlFor="lastname">
Last Name
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={this.props.lastname}
                />
                </label>
                <label htmlFor="type">
              Interest
              <select name="type" id="type">
                <option value="volvo">Christmas Give Away</option>
                <option value="saab">Stock the Shelf</option>
                <option value="opel">Summer Launch</option>
                <option value="audi">Our Daily Bread</option>
              </select>
                </label>
                <label htmlFor="company">
Company
<input
  id="company"
  type="text"
  placeholder="Company"
  value={this.props.company}
/>
</label>
<label htmlFor="jobtitle">
Title
<input
  id="jobtitle"
  type="text"
  placeholder="JOb Title"
  value={this.props.jobtitle}
/>
</label>
<label htmlFor="address">
Address
<input
  id="address"
  type="text"
  placeholder="Address"
  value={this.props.address}
/>
</label>
<label htmlFor="city">
City
<input
  id="city"
  type="text"
  placeholder="City"
  value={this.props.city}
/>
</label>
<label htmlFor="postal">
Zip Code
<input
  id="postal"
  type="text"
  placeholder="Postal Code"
  value={this.props.postal}
/>
</label>
<label htmlFor="email">
Email
<input
  id="email"
  type="email"
  placeholder="Email"
  value={this.props.email}
/>
</label>
<label htmlFor="phone">
Phone
<input
  id="phone"
  type="number"
  placeholder="Phone"
  value={this.props.phone}
/>
</label>

<label htmlFor="gender">
Gender
<input
  id="gender"
  type="text"
  placeholder="Gender"
  value={this.props.gender}
/>
</label>
<label htmlFor="birthday">
Birthday
<input
  id="birthday"
  type="text"
  placeholder="Birthday"
  value={this.props.bithday}
/>
</label>
<input
          type="submit"
          className="btn btn-primary "
          value="Submit"/>
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
