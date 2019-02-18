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
    state = {
    astronomyPicture: []

  }

getAstronomyPicture = async () => {
  try{
    const astronomyPicture = await fetch('https://api.nasa.gov/planetary/apod?start_date=2019-01-01&api_key=D6NtYIn84Pp4G2ZZsGk6jMW1HkU7RCg7dSvqG5eg');
    const astronomyPictureJson = await astronomyPicture.json();
      this.setState({
        astronomyPicture: astronomyPictureJson
      });
      return astronomyPictureJson;
  
  }catch (err) {
        console.log(err, 'error in catch block')
        return err
    }
  }

  componentDidMount(){
      this.getAstronomyPicture()
      .then((data) => console.log(data, ' from APOD API'));
    }

  render() {
    return (
      <Router>
      <div>
          <nav>
            <Link to="/home">Home</Link>{' '}
            <Link to="/explore">Explore</Link>{' '}
            <Link to="/profile">Profile</Link>
          </nav>

          <Route exact path="/home" render={(props) => <Home astronomyPicture={this.state.astronomyPicture} {...props} /> }/>
          <Route path="/explore" render={(props) => <Explore astronomyPicture={this.state.astronomyPicture} {...props} /> }/>
          <Route path="/profile" render={(props) => <Profile astronomyPicture={this.state.astronomyPicture} {...props} /> }/>
      </div>
      </Router>
    );
  }
}

export default MainContainer;