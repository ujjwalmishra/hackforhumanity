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
    const { loading, error, repos } = this.props;
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
        <div className="donor-page">
          <section>
            <h2>Add Donor</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="firstname">

                <input
                  id="firstname"
                  type="text"
                  placeholder="First Name"
                  value={this.props.firstname}
                />
              </label>
              <label htmlFor="lastname">

                <input
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={this.props.lastname}
                />
                </label>
                <label htmlFor="type">

              <select name="type" id="type">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
                </label>
                <label htmlFor="company">

<input
  id="company"
  type="text"
  placeholder="Company"
  value={this.props.company}
/>
</label>
<label htmlFor="jobtitle">

<input
  id="jobtitle"
  type="text"
  placeholder="JOb Title"
  value={this.props.jobtitle}
/>
</label>
<label htmlFor="address">

<input
  id="address"
  type="text"
  placeholder="Address"
  value={this.props.address}
/>
</label>
<label htmlFor="city">

<input
  id="city"
  type="text"
  placeholder="City"
  value={this.props.city}
/>
</label>
<label htmlFor="postal">

<input
  id="postal"
  type="text"
  placeholder="Postal Code"
  value={this.props.postal}
/>
</label>
<label htmlFor="email">

<input
  id="email"
  type="email"
  placeholder="Email"
  value={this.props.email}
/>
</label>
<label htmlFor="phone">

<input
  id="phone"
  type="number"
  placeholder="Phone"
  value={this.props.phone}
/>
</label>
<label htmlFor="address">

<input
  id="address"
  type="text"
  placeholder="Address"
  value={this.props.address}
/>
</label>
<label htmlFor="gender">

<input
  id="gender"
  type="text"
  placeholder="Gender"
  value={this.props.gender}
/>
</label>
<label htmlFor="birthday">

<input
  id="birthday"
  type="text"
  placeholder="Birthday"
  value={this.props.bithday}
/>
</label>
<input
          type="submit"
          className="btn btn-primary float-right"
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
