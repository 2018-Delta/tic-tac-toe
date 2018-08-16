import React, { Component } from 'react';

import Square from './Square'
import './Board.css'

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			squaresArray: ["", "", "", "", "", "", "", "", ""],
			clickEventsCount: 0
		}
	}

	updateClicks = (event, id) => {
		console.log(event);
		console.log(id);
		this.setState({clickEventsCount: this.state.clickEventsCount + 1})
	}

	render() {
		let squares = this.state.squaresArray.map((square, index) => {
			console.log(square, index);
			return (
				<Square updateClicks={this.updateClicks} />
			)
		})
		return (
			<main>
				{squares}
			</main>
		);
	}
}

export default Board;
