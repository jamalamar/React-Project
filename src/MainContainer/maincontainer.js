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
    const astronomyPicture = await fetch('https://api.nasa.gov/planetary/apod?count=12&api_key=D6NtYIn84Pp4G2ZZsGk6jMW1HkU7RCg7dSvqG5eg');
    const astronomyPictureJson = await astronomyPicture.json();
      this.setState({
        astronomyPicture: astronomyPictureJson,
      });
      return astronomyPictureJson;
  
  }catch (err) {
        console.log(err, 'error in catch block')
        return err
    }
  }

    getMorePics = async ()=> {
      try{
      const response = await fetch('https://api.nasa.gov/planetary/apod?count=12&api_key=D6NtYIn84Pp4G2ZZsGk6jMW1HkU7RCg7dSvqG5eg');
      const morePicsJson = await response.json();
        return morePicsJson
      }catch (err) {
        console.log(err)
        return err
      }
    }

    concatPics = ()=>{
      this.getMorePics()
        .then((data) => data.forEach((element)=>{
          this.state.astronomyPicture.push(element)
        }))
          .then(console.log(this.state.astronomyPicture))
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
        <Menu.Item>
          <p className='WelcomeUsername'>Welcome {this.props.username}</p>
        </Menu.Item>
      </Container>
    </Menu>



    <Container className='ImageContainer'>
        <Header as='h1'>Semantic UI React Fixed Template</Header>
          <Route exact path="/home" render={(props) => <Home astronomyPicture={this.state.astronomyPicture} users={this.props.users} username={this.props.username} user_id={this.props.user_id} {...props} /> }/>
          <Route path="/explore" render={(props) => <Explore astronomyPicture={this.state.astronomyPicture} concatPics={this.concatPics} {...props} /> }/>
          <Route path="/profile" render={(props) => <Profile astronomyPicture={this.state.astronomyPicture} users={this.props.users} {...props} /> }/>  
    </Container>



    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='Contact' />
            <List link inverted>
              <List.Item as='a' href='https://www.linkedin.com/in/jamal-amar/' target='_blank'>Linked-In</List.Item>

            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='Created by Jamal' />
            <p>
                Using Nasa's API. (APOD)
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='https://www.linkedin.com/in/jamal-amar/' target='_blank'>
            Contact Me
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

