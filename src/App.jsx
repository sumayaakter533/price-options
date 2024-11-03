import './App.css';
import CustomNav from './components/CustomNav/CustomNav';
import LineChart from './components/LineChart/LineChart';
import Phones from './components/Phones/Phones';
import PriceOptions from './components/PriceOptions/PriceOptions';

function App() {
	return (
		<>
			<section className="bg-slate-50 h-screen">
				<CustomNav></CustomNav>
				<PriceOptions></PriceOptions>
				<LineChart></LineChart>
				<Phones></Phones>
			</section>
		</>
	);
}

export default App;
