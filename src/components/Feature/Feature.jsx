import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const Feature = ({ feature }) => {
	return (
		<li className='flex items-center gap-2 text-sm font-thin'>
			<AiFillCaretRight />
			{feature}
		</li>
	);
};

export default Feature;
