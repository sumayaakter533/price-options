import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const CustomNav = () => {
	const [open, setOpen] = useState(true);
	const routes = [
		{ id: 1, path: '/home', name: 'Home' },
		{ id: 2, path: '/about', name: 'About' },
		{ id: 3, path: '/services', name: 'Services' },
		{ id: 4, path: '/contact', name: 'Contact' },
		{ id: 5, path: '/profile', name: 'Profile' },
	];

	return (
		<nav className="text-white ">
			<div className="bg-purple-950 border-b md:hidden">
				<p className="flex justify-between items-center text-2xl p-6">
					Menu
					<button
						className="md:hidden flex justify-between"
						onClick={() => setOpen(!open)}
					>
						{open === true ? (
							<AiOutlineClose className="text-2xl"></AiOutlineClose>
						) : (
							<AiOutlineMenu className="text-2xl" />
						)}
					</button>
				</p>
			</div>
			<ul
				className={`bg-purple-950 p-6 translate-y-0 transition-transform duration-300 flex flex-col md:flex-row justify-center gap-4 ${
					open ? 'translate-x-0' : '-translate-x-full'
				} `}
			>
				{routes.map((route) => (
					<Link key={route.id} route={route}></Link>
				))}
			</ul>
		</nav>
	);
};

export default CustomNav;
