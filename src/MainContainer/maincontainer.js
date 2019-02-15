import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home/home.js'
import Explore from './Explore/explore.js'
import Profile from './Profile/profile.js'


class MainContainer extends Component {

  render() {
    return (
      <Router>
      <div>
          <nav>
            <Link to="/home">Home</Link>{' '}
            <Link to="/explore">Explore</Link>{' '}
            <Link to="/profile">Profile</Link>
          </nav>

          <Route exact path="/home" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/profile" component={Profile} />
      </div>
      </Router>
    );
  }
}

export default MainContainer;