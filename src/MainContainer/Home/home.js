import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'



class Home extends Component {
  
  render() {

	const astroPicComposed = this.props.astronomyPicture.map((item, index)=>{
		return(
				<a href={item.hdurl}>
						<li key={index} className='HomeLi'>  
						<img src={item.url} className='HomeImage'/>
						<Container className='HomeImageTitle'textAlign='center'><h2>{item.title}</h2></Container>
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
        <h2 className="Home">Home</h2>
        <ul className='HomeUl'>{astroPicComposed}</ul>
      </div>
    );
  }
}

export default Home;