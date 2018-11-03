/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AddDonor from 'containers/AddDonor/Loadable';
import Profile from 'containers/Profile/Loadable';
import AskDonation from 'containers/AskDonation/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import Search from 'containers/Search/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div class="container">
  <div className="app-wrapper col-sm-12">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={Search} />
      <Route path="/adddonor" component={AddDonor} />
      <Route path="/profile" component={Profile} />
      <Route path="/askdonation" component={AskDonation} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
  </div>
);

export default App;
