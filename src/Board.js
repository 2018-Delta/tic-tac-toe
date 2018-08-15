import React, { Component } from 'react';

import Square from './Square'
import './Board.css'

class Board extends Component {
	render() {
		return (
			<main>
				<Square />
				<Square />
				<Square />

				<Square />
				<Square />
				<Square />

				<Square />
				<Square />
				<Square />
			</main>
		);
	}
}

export default Board;
