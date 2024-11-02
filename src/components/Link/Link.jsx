import React from 'react';
import './Link.css';

const Link = ({ route }) => {
	return (
		<div>
			<li className="hover-li-style">
				<a href={route.path}>{route.name}</a>
			</li>
		</div>
	);
};

export default Link;
