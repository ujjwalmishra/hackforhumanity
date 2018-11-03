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
import Checkbox from 'components/Checkbox';
import axios from 'axios';
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
    console.log(e.target.checked)
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    console.log(this.state.checkedItems.get("a"));
  }

  sendEmail(e) {
    axios.get(`http://localhost:3001/email`)
    .then(res => {
      console.log(res);
    });
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
    if(donors.length) {
      return (
        <article>
          <Helmet>
            <title>Ask Donation</title>
            <meta name="description" content="A React.js Boilerplate application homepage" />
          </Helmet>
          <div className="searchdonor-page col-sm-12 text-center">
            <section className="text-center center">
              <h2>Search Donors{this.props.message}</h2>
              <form onSubmit={this.props.onSubmitForm}>
                <div className="col-sm-12">
                
                <div>Choose Interests:</div>
                <select name="interests" id="type" class="col-sm-6">
                  <option value="1">Christmas give away</option>
                  <option value="2">Minni's on the GO</option>
                  <option value="3">Stock the shelf</option>
                  <option value="4">Food drive</option>
                  <option value="5">Other</option>
                </select>
                </div>
                <div className="col-sm-12">
                  <div>Amount Range</div>
                  <input
                    id=""
                    type="number"
                    name="minimum"
                    
                    className="gap"
                    placeholder="Minimum"
                    value={this.props.minimum}
                  />
                                  <input
                    id=""
                    type="number"
                    name="maximum"
                    
                    className="gap"
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
            className="btn btn-primary"
            value="Search"/>
              </form>
            </section>
          </div>
          
        <section className="results col-sm-6 offset-sm-3" >
        {/* <React.Fragment>
          {
            donors.map(item => (
              <label key={item.id} className="containerc">
                {item.fullName}
                <Checkbox name={item.id} checked={this.state.checkedItems.get(item.id)} onChange={this.handleChange} />
                <span className="checkmark"></span>
              </label>
            ))
          }
        </React.Fragment> */}
        Donors
        <label className="containerc">
          John Miller
          <input name="1" type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="containerc">
          Sam 
          <input name="2" type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <div className="actions" donors={donors.length} >
        <button type="button" class="btn btn-success" onClick={this.sendEmail}>Send Newsletter</button>
        <button type="button" class="btn btn-success">Send text</button>
        <button type="button" class="btn btn-success">Ask Donation Via text</button>
        </div>
        </section>
        </article>
      );
    }
    else {
      return (
        <article>
          <Helmet>
            <title>Ask Donation</title>
            <meta name="description" content="A React.js Boilerplate application homepage" />
          </Helmet>
          <div className="searchdonor-page col-sm-12 text-center">
            <section>
              <h2>Search Donors{this.props.message}</h2>
              <form onSubmit={this.props.onSubmitForm}>
                <div className="col-sm-12">
                
                <div>Choose Interests:</div>
                <select name="interests" id="type" class="col-sm-6">
                  <option value="1">Christmas give away</option>
                  <option value="2">Minni's on the GO</option>
                  <option value="3">Stock the shelf</option>
                  <option value="4">Food drive</option>
                  <option value="5">Other</option>
                </select>
                </div>
                <div className="col-sm-12">
                  <div>Amount Range</div>
                  <input
                    id=""
                    type="number"
                    name="minimum"
                    className="gap"
                    placeholder="Minimum"
                    value={this.props.minimum}
                  />
                                  <input
                    id=""
                    type="number"
                    name="maximum"
                    className="gap"
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
            className="btn btn-primary "
            value="Search"/>
              </form>
            </section>
          </div>
          
        <section className="results" >

        </section>
        </article>
      );    
    }
    
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
