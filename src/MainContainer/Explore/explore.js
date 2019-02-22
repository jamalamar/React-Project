import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Icon, Button } from 'semantic-ui-react'


class Explore extends Component {

  render() {  	
    const astroPicComposed = this.props.astronomyPicture.map((item, index)=>{
  		return(
		    <a key={index} href={item.hdurl} target='_blank'>
		      <img src={item.url} alt={item.media_type} className='ExploreImage'/>
		    </a>
  		)
  	})
    
    return (
      <div > 
        <h2 className="Explore">Explore</h2>
  			<Grid columns='equal'>
		      <Grid.Row columns='equal'>
					{astroPicComposed}
		      </Grid.Row>
			</Grid>
      <Button onClick={this.props.concatPics}>Get More</Button>
      </div>
    );
  }
}

export default Explore;
