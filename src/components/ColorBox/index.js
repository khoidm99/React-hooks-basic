import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {};

function ColorBox() {
	const [color, setColor] = useState('deeppink');

	function handleClick() {
		const newColor = getRandomColor();
		setColor(newColor);
	}
	return (
		<div className="color-box" style={{ backgroundColor: color }} onClick={handleClick}>
			Color Box
		</div>
	);
}

function getRandomColor() {
	const COLOR_LIST = ['deeppink', 'red', 'green', 'blue', 'yellow'];
	const randomIndex = Math.trunc(Math.random() * 5);
	return COLOR_LIST[randomIndex];
}

export default ColorBox;
