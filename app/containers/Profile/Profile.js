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

class MainPanel extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    
    return (
     <div>
        <div className="top">
            <Avatar 
               image={info.photo} 
               width={100}
               height={100}
            /> 
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>
          
          <hr />
            <p>{info.gender} | {info.birthday}</p>
            <p>{info.email} | {info.phone}</p>
          <hr />
            Interaction history
            <p className="int">Oct 1, 2018 - Donor Added</p>  
            <p className="int">Oct 3, 2018 - $50 donation toward food drive x made</p>  
            <p className="int">Nov 13, 2018 - Upcoming events newsletter sent</p>  
            <p className="int">Nov 15, 2018 - Request for donation via  text sent</p>  
            <p className="int">Nov 16, 2018 - $100 donation recieved</p>  
          <hr />
            Interests
            <p>Christmas Give Away</p>
            <p>Stock the shelf</p>
            <p>Minni's on the go</p>  
        </div>
        
        <div className="bottom">
          <h4>Biography</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}

var user = {
  basicInfo: {
    name: "Jane Doe",
    gender: "Female",
    birthday: "April 3, 1990",
    location: "Los Angeles, CA",
    photo: "http://lorempixel.com/500/500/people",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
    ,email: "Jane@gmail.com",
    phone: "+1456322288"
  }
}


class Avatar extends React.Component {
  render() {
    var image = this.props.image,
        style = {
          width: this.props.width || 50,
          height: this.props.height || 50
        }; 
    
    if (!image) return null;
    
    return (
     <div className="avatar" style={style}>
           <img src={this.props.image} /> 
      </div>
    );
  }
}


export default class Profile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  render() {

    return (
      <article>
      <h1 className="col-sm-6 offset-sm-3 text-center">Profile Page</h1>
      <div id="user-profile">
      <MainPanel info={user.basicInfo} />
      </div>
      </article>
    );
  }
}

