import { useSelector, useDispatch } from "react-redux";
import { toggleSessionMode } from "../state/sessionSlice";
import { setActive, toggleRunning } from "../state/panelSlice";


export default function SessionPanel() {

    const sessionMode = useSelector(state => state.session.mode); 
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleSessionMode(!sessionMode));
        if (sessionMode === false) {
            dispatch(setActive("focus"));
            dispatch(toggleRunning({title: "focus", runValue: true}))
        } else {
            dispatch(setActive(null));
            dispatch(toggleRunning({title: "break", runValue: false}))
            dispatch(toggleRunning({title: "focus", runValue: false}))
        }
    }

    return (
        <section className="session-container">
            <button onClick={handleClick}>
                {!sessionMode ? "Start" : "End"} Session
            </button>
        </section>
    )
}