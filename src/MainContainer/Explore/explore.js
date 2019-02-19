import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'


class Explore extends Component {
  render() {

	const astroPicComposed = this.props.astronomyPicture.map((item, index)=>{
		return(
				<a href={item.hdurl}>
						<li key={index}>  
						<img src={item.url}/>
						<Container className='newsTittle'textAlign='center'><h2>{item.title}</h2></Container>
						<Container textAlign='left'>{item.date}</Container>
						<Container textAlign='right'>{item.publishedAt}</Container>
						<Container textAlign='justified'>
							<b>{item.author}</b>
						<Divider />
							<h3>{item.title}</h3>
							<p>{item.explanation}</p>
						</Container>
					</li>
				</a>
			)
	})

    return (
      <div>
        <h2 className="Explore">Explore</h2>
        <ul>{astroPicComposed}</ul>
      </div>
    );
  }
}

export default Explore;