import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { username } = this.props;
    return (
      <div className="header">
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/search">
            Search
          </Link>
          <Link className="router-link" to="/adddonor">
            Add Donor
          </Link>  
          <Link className="router-link" to="/askdonation">
            Ask Donation
          </Link>
          <Link className="router-link" to="/profile">
             {username} Profile
          </Link>        
        </div>
      </div>
    );
  }
}

export default Header;
