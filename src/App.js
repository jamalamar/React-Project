import React, { Component } from 'react';
import Login from './Login/login.js';
import MainContainer from './MainContainer/maincontainer.js';
import './App.css';
// import Auth from './Login/auth.js'

class App extends Component {  
    state = {
      users: [],
        logged: false,
        username: ''
    }

    login = (username) => {
      this.setState({
        logged: true,
        username: username
    })
  }


  getUsers = async () => {
  try{
    const users = await fetch('http://localhost:8080/users');
    const usersJson = await users.json();
      this.setState({
        users: usersJson,
      });
      return usersJson;
  
  }catch (err) {
        console.log(err, 'error in catch block')
        return err
    }
  }

    componentDidMount(){
     this.getUsers()
      .then((data) => console.log(data, ' from SQL databse'));
    }


  render() {
    return (
      <div className="App">
      {this.state.logged ? <MainContainer users={this.state.users}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;