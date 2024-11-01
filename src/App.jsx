import './App.css';

function App() {
	return (
		<>
			<h1 className="text-center text-4xl font-semibold text-slate-950">
				React with Tailwind CSS
			</h1>

			<div className="navbar bg-base-100 my-10">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<a>Item 1</a>
							</li>
							<li>
								<a>Parent</a>
								<ul className="p-2">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">daisyUI</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<details>
								<summary>Parent</summary>
								<ul className="p-2">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Button</a>
				</div>
			</div>

			<div className="stats shadow ">
				<div className="stat">
					<div className="stat-figure text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block h-8 w-8 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							></path>
						</svg>
					</div>
					<div className="stat-title">Total Likes</div>
					<div className="stat-value text-primary">25.6K</div>
					<div className="stat-desc">21% more than last month</div>
				</div>

				<div className="stat">
					<div className="stat-figure text-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block h-8 w-8 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
					</div>
					<div className="stat-title">Page Views</div>
					<div className="stat-value text-secondary">2.6M</div>
					<div className="stat-desc">21% more than last month</div>
				</div>

				<div className="stat">
					<div className="stat-figure text-secondary">
						<div className="avatar online">
							<div className="w-16 rounded-full">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
							</div>
						</div>
					</div>
					<div className="stat-value">86%</div>
					<div className="stat-title">Tasks done</div>
					<div className="stat-desc text-secondary">31 tasks remaining</div>
				</div>
			</div>
		</>
	);
}

export default App;
