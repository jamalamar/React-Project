import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'


class Explore extends Component {
  render() {
  	
  	const astroPicComposed = this.props.astronomyPicture.map((item, index)=>{
  		return(
		    <a key={index} href={item.hdurl} target='_blank'>
		      <img src={item.url} className='ExploreImage'/>
		    </a>
  		)
  	})
    
    return (
      <div style={{height: '700px', overflow: 'auto'}}>
        <h2 className="Explore">Explore</h2>
  			<Grid columns='equal' >
		      <Grid.Row columns='equal'>
					{astroPicComposed}
		      </Grid.Row>
			</Grid>
      </div>
    );
  }
}

export default Explore;

