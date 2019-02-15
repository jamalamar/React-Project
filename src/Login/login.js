import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


class Login extends Component {

  state = {
    username: '',
    password: ''
  }

    handleSubmit = (event) => {
    // stop page from refreshing
    event.preventDefault();
    this.props.login(this.state.username);

    }

    handleChange = (event) => {
      this.setState({
        [event.currentTarget.name]: event.currentTarget.value
      })
    }


  render() {
    return(
  <Segment placeholder className='Login'>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input icon='user' iconPosition='left' label='Username' type='text' placeholder='Username' onChange={this.handleChange}/>
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' onChange={this.handleChange}/>

          <Button type='submit' content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big'/>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  )
  }
}
export default Login;
