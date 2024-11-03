import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Audio } from 'react-loader-spinner';

const Phones = () => {
	const [phones, setPhones] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
		// 	.then((res) => res.json())
		// 	.then((data) => setPhones(data.data));

		axios
			.get('https://openapi.programming-hero.com/api/phones?search=iphone')
			.then((data) => {
				const phoneData = data.data.data;
				const phoneFakeData = phoneData.map((phone) => {
					const phoneObj = {
						name: phone.phone_name,
						price: parseInt(phone.slug.split('-')[1]),
					};
					return phoneObj;
				});
				setPhones(phoneFakeData);
				setLoading(false);
			});
	}, []);
	return (
		<div className="text-center py-10">
			{loading && (
				<div className="h-screen flex justify-center">
					<Audio
						height={`80`}
						width={`80`}
						radius="9"
						color="green"
						ariaLabel="three-dots-loading"
						wrapperClass
						wrapperStyle
					></Audio>
				</div>
			)}
			<h3 className="text-4xl mb-8">Phones: {phones.length}</h3>
			<BarChart width={1200} height={400} data={phones} className="m-auto">
				<XAxis dataKey={`name`}></XAxis>
				<YAxis></YAxis>
				<Bar dataKey="price" fill="#8884d8" />
			</BarChart>
		</div>
	);
};

export default Phones;
