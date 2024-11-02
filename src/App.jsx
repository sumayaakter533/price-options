import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import CustomNav from './components/CustomNav/CustomNav';

function App() {
	return (
		<>
			<h1 className="text-4xl font-semibold text-slate-950 flex items-center justify-center gap-4">
				React with Tailwind CSS
				<FontAwesomeIcon icon={faHome} className="text-3xl" />
			</h1>

			<CustomNav></CustomNav>
		</>
	);
}

export default App;
