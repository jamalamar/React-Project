import React, { Component } from 'react';

class Explore extends Component {
  render() {

	const astroPicComposed = this.props.astronomyPicture.map((item, index)=>{
		return(
			<div key={index}>
			<li>{item.title}</li>
			</div>
			)
	})

    return (
      <div className="Explore">
        <h2>Explore</h2>
        <ul>{astroPicComposed}</ul>
      </div>
    );
  }
}

export default Explore;