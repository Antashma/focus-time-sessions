import Panel from './components/Panel';
import SessionPanel from './pages/SessionPanel';

import './App.css'

function App() {

	return (
		<>
		<main>
			<Panel title="focus" />
			<SessionPanel />
			<Panel title="break" />
		</main>
		
		<footer>
			<h1>Focus Time: Sessions</h1>
			<p>A simple 25/5 pomodoro timer.</p>
			<p>Created with 💖 by <a href="http://www.antashma.dev" target='_blank'>Antashma</a></p>
			<p>Starfield Background by <a href="https://dev.to/usman_awan/how-i-built-a-grok-inspired-starfield-shooting-stars-using-html-canvas-3872" arget='_blank'>Usman Awan</a></p>
		</footer>
		</>
	)
}

export default App
