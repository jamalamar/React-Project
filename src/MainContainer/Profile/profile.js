import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class Profile extends Component { 
  render() {
  	const usersComposed = this.props.users.map((item, index)=>{
	    return (
	    	<li key={index} className='ProfileLi'>
    		  <Card>
			    <Image src={item.image} />
			    <Card.Content>
			      <Card.Header>{item.username}</Card.Header>
			      <Card.Meta>
			        <span className='date'>{item.city}, {item.state}</span>
			      </Card.Meta>
			      <Card.Description>{item.email}</Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='user' />
			        22 Friends
			      </a>
			    </Card.Content>
			  </Card>
			</li>
		)
	})

	return(
		<div>
		<h2 className='Profile'>Profile</h2>
		<ul className='ProfileUl'>{usersComposed}</ul>
		</div>
		)
}}
