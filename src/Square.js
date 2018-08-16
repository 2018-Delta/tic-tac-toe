import React, { Component } from 'react';

class Square extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: 4
		}
	}

	handleClick = (event) => {
		console.log("I was clicked!!");
		this.props.updateClicks(event, this.state.id)
	}

	render() {
		return (
			<section onClick={this.props.updateClicks}>
				I am a square!
			</section>
		);
	}
}

export default Square;
