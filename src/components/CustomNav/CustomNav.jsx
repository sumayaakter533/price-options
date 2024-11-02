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
		<nav className="bg-purple-950 text-white ">
			<div className="">
				<p className="flex justify-between items-center md:hidden text-2xl p-6">
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
				className={`flex flex-col md:flex-row justify-center items-center gap-4 p-6 pt-0 md:p-6 text-center ${open ? '' : 'hidden'}`}
			>
				{routes.map((route) => (
					<Link key={route.id} route={route}></Link>
				))}
			</ul>
		</nav>
	);
};

export default CustomNav;
