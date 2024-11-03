import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
	const { name, price, features } = option;
	return (
		<div className="flex flex-col gap-8 rounded-lg p-6 text-center bg-purple-950 text-white">
			<h4 className="text-xl font-thin">
				<p className="text-xl font-normal">{name}</p>
				<span className="text-4xl font-medium">{price}</span>
				/mon
			</h4>
			<ul className="flex-grow">
				{features.map((feature, index) => (
					<Feature key={index} feature={feature}></Feature>
				))}
			</ul>
			<button className="bg-purple-200 text-purple-950 w-full rounded-md  text-lg font-bold py-1">
				Buy Now
			</button>
		</div>
	);
};

export default PriceOption;
