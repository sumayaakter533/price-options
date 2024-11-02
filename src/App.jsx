import './App.css';
import CustomNav from './components/CustomNav/CustomNav';

function App() {
	return (
		<>
			<section className="bg-slate-50 h-screen">
				<CustomNav></CustomNav>
				<h1 className="w-11/12 m-auto lg:text-6xl text-4xl text-center font-semibold text-slate-950 py-20">
					React with Tailwind CSS
				</h1>
			</section>
		</>
	);
}

export default App;
