import React from 'react';
import Link from '../Link/Link';

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
					<Link key={route.id} route={route}></Link>
				))}
			</ul>
		</nav>
	);
};

export default CustomNav;
