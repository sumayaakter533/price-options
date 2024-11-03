import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
	const priceOptions = [
		{
			id: 1,
			name: 'Basic Plan',
			price: 30,
			features: [
				'Access to gym equipment',
				'Locker facility',
				'One group class per week',
			],
		},
		{
			id: 2,
			name: 'Standard Plan',
			price: 50,
			features: [
				'Access to gym equipment',
				'Locker facility',
				'Unlimited group classes',
				'Access to sauna',
			],
		},
		{
			id: 3,
			name: 'Premium Plan',
			price: 80,
			features: [
				'Access to gym equipment',
				'Personal locker',
				'Unlimited group classes',
				'Access to sauna and pool',
				'Free personal training session',
			],
		},
		{
			id: 4,
			name: 'Annual Plan',
			price: 200,
			features: [
				'Full access to gym equipment',
				'Personal locker',
				'Unlimited group classes',
				'Access to sauna and pool',
				'Monthly free personal training session',
				'Discounts on merchandise',
			],
		},
	];

	return (
		<div>
			<h3 className="text-6xl font-medium text-center py-10">Price Options</h3>
			<div className="w-11/12 m-auto p-4 border-2 border-purple-800 rounded-xl bg-purple-200 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
				{priceOptions.map((option) => (
					<PriceOption key={option.id} option={option}></PriceOption>
				))}
			</div>
		</div>
	);
};

export default PriceOptions;
