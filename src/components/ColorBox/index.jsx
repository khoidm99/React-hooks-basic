import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {};

function ColorBox() {
	const [color, setColor] = useState('deepskyblue');
	return (
		<div className="box-color" style={{ backgroundColor: color }}>
			Color Box
		</div>
	);
}

export default ColorBox;
