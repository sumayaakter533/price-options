import React from 'react';
import {
	LineChart as LChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

const LineChart = () => {
	const subjecctMarksData = [
		{ id: 1, name: 'Alice', marks: { math: 88, physics: 91, chemistry: 85 } },
		{ id: 2, name: 'Ben', marks: { math: 74, physics: 78, chemistry: 72 } },
		{ id: 3, name: 'Clara', marks: { math: 91, physics: 87, chemistry: 89 } },
		{ id: 4, name: 'David', marks: { math: 85, physics: 82, chemistry: 80 } },
		{ id: 5, name: 'Eva', marks: { math: 79, physics: 84, chemistry: 76 } },
		{ id: 6, name: 'Frank', marks: { math: 83, physics: 79, chemistry: 81 } },
		{ id: 7, name: 'Grace', marks: { math: 95, physics: 92, chemistry: 94 } },
		{ id: 8, name: 'Henry', marks: { math: 78, physics: 75, chemistry: 73 } },
		{ id: 9, name: 'Isabel', marks: { math: 90, physics: 88, chemistry: 86 } },
		{ id: 10, name: 'Jack', marks: { math: 84, physics: 80, chemistry: 82 } },
	];

	// Transform data to flat structure for easier charting
	const chartData = subjecctMarksData.map((student) => ({
		name: student.name,
		math: student.marks.math,
		physics: student.marks.physics,
		chemistry: student.marks.chemistry,
	}));

	return (
		<div className="my-10 text-center bg-black py-20">
			<h1 className="text-4xl font-bold mb-16 text-gray-200">Line chart</h1>
			<LChart width={800} height={400} data={chartData} className="m-auto">
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<CartesianGrid strokeDasharray="3 3" />
				<Line dataKey="math" stroke="red"></Line>
				<Line dataKey="physics" stroke="blue"></Line>
				<Line dataKey="chemistry" stroke="green"></Line>
			</LChart>
		</div>
	);
};

export default LineChart;
