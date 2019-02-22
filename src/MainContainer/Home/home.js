import React, { Component } from 'react';
import { 
	Container, 
	Divider, 
	Button, 
	Icon,
	Label 
} from 'semantic-ui-react'


class Home extends Component {

	state = {
		likes: 0,
		user_id: this.props.user_id,
		item_name: '',
		publish_date: new Date(),
		price: 0,
	}
	
  
	updateLikes = ()=>{
		const likes = this.state.likes
		this.setState({
			likes: +1
		})
	}

	changeItem = (item) =>{
		// console.log(event)
		// let = 'whateve we have from the event'
		this.setState({
			item_name: item
		})
	}

    savePicture = (event)=> {
	  fetch('http://localhost:8080/items/new', {
	    method: "POST",
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
		user_id: this.props.user_id, 
		item_name: this.state.item_name, 
		publish_date: this.state.publish_date,
		price: this.state.price,
	    })
	  }).then(response => response.json())
	  	.then(console.log(this.state.item_name))  
	}


  render() {
  
	const astroPicComposed = this.props.astronomyPicture.map((item, index)=>{	

		this.state.item_name = item.url

		return(
		<li key={index} className='HomeLi'>
			<a href={item.hdurl} target='_blank' >
				<img src={item.url} className='HomeImage'/>
				<Container className='HomeImageTitle' textAlign='center'><h2 className='TitleInsideImage'>{item.title}</h2></Container>
				<Container textAlign='left'>{item.date}</Container>
				<Container textAlign='right'>{item.publishedAt}</Container>
				<Container textAlign='justified'>
					<b>{item.author}</b>
				<Divider />
					<h3>{item.title}</h3>
					<p>{item.explanation}</p>
				</Container>
			</a>
				<div className='Buttons'>
				    <Button as='div' labelPosition='right' >
				      <Button color='red' onClick={this.updateLikes}>
				        <Icon name='heart' />
				        likes
				      </Button>
				      <Label as='a' basic color='red' pointing='left'>
				        {this.state.likes}
				      </Label>
				    </Button>
				    <Button as='div' labelPosition='right'>
				      <Button basic color='blue' onClick={this.savePicture}>
				        <Icon name='disk' />
				        Save
				      </Button>
				      <Label as='a' basic color='blue' pointing='left'>
				        2,048
				      </Label>
				    </Button>
				</div>
		</li>
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