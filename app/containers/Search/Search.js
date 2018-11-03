/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import {Typeahead} from 'react-bootstrap-typeahead';
import Checkbox from 'components/Checkbox'
import './style.scss';

export default class Search extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.id;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }

  render() {
    const { loading, error, repos } = this.props;
    let donors = this.props.donors || [];
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
        <div className="askdonor-page col-sm-12">
          <section>
            <h2>Search Donors{this.props.message}</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <div className="col-sm-12">
              
              <div>Choose Interests:</div>
              <select name="interests" id="type" class="col-sm-6">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              </div>
              <div className="col-sm-6">
                <div>Amount Range</div>
                <input
                  id=""
                  type="number"
                  name="minimum"
                  placeholder="Minimum"
                  value={this.props.minimum}
                />
                                <input
                  id=""
                  type="number"
                  name="maximum"
                  placeholder="Maximum"
                  value={this.props.maximum}
                />
                </div>
                <div class="col-sm-12">
             <div> Time Range </div>
              <select name="type" id="type" class="col-sm-6">
                <option value="lastmonth">Last Month</option>
                <option value="sixmonth">Last Six Month</option>
                <option value="year">Last Year</option>
                <option value="custom">Custom</option>
              </select>

                </div>


<input
          type="submit"
          className="btn btn-primary float-left"
          value="Search"/>
            </form>
          </section>
        </div>
        
      <section className="results" >
      <React.Fragment>
        {
          donors.map(item => (
            <label key={item.id}>
              {item.fullName}
              <Checkbox name={item.id} checked={this.state.checkedItems.get(item.id)} onChange={this.handleChange} />
            </label>
          ))
        }
      </React.Fragment>
      </section>
      </article>
    );
  }
}

Search.propTypes = {
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
