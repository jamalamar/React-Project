import React, { Component } from 'react';
import Login from './Login/login.js';
import MainContainer from './MainContainer/maincontainer.js';
import './App.css';
// import Auth from './Login/auth.js'

class App extends Component {  
    state = {
      users: [],
        logged: false,
        username: '',
        user_id: 0
    }

    login = (username) => {
      console.log(this)
      this.setState({
        logged: true,
        username: username
    })
  }

    changeId = ( user_id) => {
        console.log(this)
        this.setState({
          user_id: user_id
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
      {this.state.logged ? <MainContainer users={this.state.users} username={this.state.username} user_id={this.state.user_id}/> : <Login login={this.login} changeId={this.changeId} users={this.state.users}/>}
      </div>
    );
  }
}

export default App;