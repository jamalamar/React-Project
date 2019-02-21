import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';


class Login extends Component {

  state = {
    username: '',
    password: ''
  }

    handleChange = (event) => {
       this.setState({
        [event.target.name]: event.target.value
        })
      }
    
    handleSubmit = (event) => {
      event.preventDefault();
        this.props.login(this.state.username);
    }

    auth = () => {
      for(let i=0; i<this.props.users; i++){
        if(this.props.users[i].username===this.state.username){
          console.log("logged in!")
        }
      }
    }

    handleNewUser = (event)=> {
       fetch('http://localhost:8080/users/new', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: 17,
          username: this.state.username,
          email: "maildiezysietehotmail",
          city: "CDMX",
          country: "UnitedStates",
          password: this.state.password,
        })
      }
    ).then(response => response.json())
    
}
  render() {
    return(
      <div>
      <h1>Cosmo Pics</h1>
  <Segment placeholder className='Login'>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input icon='user' iconPosition='left' label='Username' type='text' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} auth={this.auth}/>
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/>

          <Button type='submit' content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Form onSubmit={this.handleNewUser}>
          <Form.Input icon='user' iconPosition='left' label='New Username' type='text' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} auth={this.auth}/>
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/>

        <Button content='Sign up' icon='signup' size='big'/>
        </Form>
      </Grid.Column>
    </Grid>
    <Divider vertical>Or</Divider>
  </Segment>
  </div>
  )
  }
}
export default Login;
