import Panel from './components/Panel';
import SessionPanel from './pages/SessionPanel';

import './App.css'

function App() {

	return (
		<>
		<header>
			<h1>Focus Time: Sessions</h1>
		</header>

		<main>
			<SessionPanel />
			<Panel title="focus" />
			<Panel title="break" />
		</main>
		
		<footer>
			<p>Created with 💖 by <a href="http://www.antashma.dev">Antashma</a></p>
		</footer>
		</>
	)
}

export default App
