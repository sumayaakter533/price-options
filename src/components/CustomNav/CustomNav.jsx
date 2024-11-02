import React from 'react';

const CustomNav = () => {
	const routes = [
		{ id: 1, path: '/home', name: 'Home' },
		{ id: 2, path: '/about', name: 'About' },
		{ id: 3, path: '/services', name: 'Services' },
		{ id: 4, path: '/contact', name: 'Contact' },
		{ id: 5, path: '/profile', name: 'Profile' },
	];

	return (
		<nav className="my-10">
			<ul className="flex justify-center items-center gap-10">
				{routes.map((route) => (
					<li key={route.id}>
						<a href={`route.pathe`}>{route.name}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default CustomNav;
