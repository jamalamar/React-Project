import React, { Component } from 'react';
import Login from './Login/login.js';
import MainContainer from './MainContainer/maincontainer.js';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  
    state = {
        logged: false,
        username: ''
    }

    login = (username) => {
      this.setState({
        logged: true,
        username: username
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Astronomy</h1>
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;