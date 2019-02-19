import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'

class Home extends Component {
  render() {
  	
  	const astroPicComposed = this.props.astronomyPicture.map((item, index)=>{
  		return(
		    <p key={index}>
		      <img src={item.url} style={{width: '200px'}}/>
		    </p>
  		)
  	})
    
    return (
      <div>
        <h2 className="Home">Home</h2>
  			<Grid columns='equal' >
		      <Grid.Row columns='equal'>
					{astroPicComposed}
		      </Grid.Row>
			</Grid>
      </div>
    );
  }
}

export default Home;