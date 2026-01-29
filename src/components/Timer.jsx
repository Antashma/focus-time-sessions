import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useSound from "use-sound";
import { decrement, toggleRunning, resetDuration, setActive, setEndTime } from "../state/panelSlice";
import { displayTime } from "../utils/timerConversions";

export default function Timer({ title }) {
	const activePanel = useSelector(state => state.panel.active);
	const duration = useSelector(state => state.panel[title].duration);
    const isRunning = useSelector(state => state.panel[title].isRunning);
    const sessionMode = useSelector(state => state.session.mode);

	const panelEndSound = useSelector(state => state.panel[title].endSound);

	const [play] = useSound(panelEndSound, {volume: 0.3})

	const dispatch = useDispatch();

	useEffect(() => {
		let interval = null;

		if (isRunning && duration > 0) {
			interval = setInterval(() => {
				dispatch(decrement(title));
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning, duration]); 

	useEffect(() => {
		if (sessionMode && duration <=0) {
			switch (activePanel) {
				case "focus":
					dispatch(setActive("break"));
					dispatch(toggleRunning({title: "break", runValue: true}));	
					break;
				case "break":
					dispatch(setActive("focus"));
					dispatch(toggleRunning({title: "focus", runValue: true}));
					break;
				default:
					break;
			}
		}
	}, [duration])

	useEffect(()=> {
		if (title !== activePanel) {
			play();
			dispatch(toggleRunning({title, runValue: false}));
			dispatch(resetDuration(title));
		}

		if (title === activePanel) {
			dispatch(setEndTime(title));
		}

	}, [activePanel])

	const startPause = () => {
		if (!isRunning) dispatch(setEndTime(title));
		dispatch(toggleRunning({title, runValue: !isRunning}));
		dispatch(setActive(title));
	};

	const reset = () => {
		dispatch(toggleRunning({title, runValue: false}));
		dispatch(resetDuration(title));
	};

	return (
		<div className="timer-container">
			<p>{displayTime(duration)}</p>
			<div className="timer-buttons">
				<button onClick={startPause}>{isRunning ? 'Pause' : 'Start'}</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);

}