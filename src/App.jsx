import './App.css';
import CustomNav from './components/CustomNav/CustomNav';
import PriceOptions from './components/PriceOptions/PriceOptions';

function App() {
	return (
		<>
			<section className="bg-slate-50 h-screen">
				<CustomNav></CustomNav>
				<PriceOptions></PriceOptions>
			</section>
		</>
	);
}

export default App;
