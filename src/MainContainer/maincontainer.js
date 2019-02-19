import React, { Component } from 'react';

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'


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
    return(
    <Router>
    <div>      
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item as='a'>
          <Link to="/explore">Explore</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">Profile</Link>
        </Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>



    <Container>
        <Header as='h1'>Semantic UI React Fixed Template</Header>
          <Route exact path="/home" render={(props) => <Home astronomyPicture={this.state.astronomyPicture} {...props} /> }/>
          <Route path="/explore" render={(props) => <Explore astronomyPicture={this.state.astronomyPicture} {...props} /> }/>
          <Route path="/profile" render={(props) => <Profile astronomyPicture={this.state.astronomyPicture} {...props} /> }/>  
    </Container>



    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
    </div>
   </Router>
    );
  }
}

export default MainContainer;

