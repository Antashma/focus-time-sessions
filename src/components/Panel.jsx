import { useSelector } from "react-redux";
import Timer from "./Timer";


export default function Panel({ title }) {
    const activePanel = useSelector(state => state.panel.active);
    const bgColor = useSelector(state => state.panel[title].bgColor);
    const fgColor = useSelector(state => state.panel[title].fgColor);
    const sessionMode = useSelector(state => state.session.mode);

    const panelStyle = {
        backgroundColor: bgColor,
        color: fgColor,
        // opacity: sessionMode && activePanel === title ? 1 : 0.5
        display: !sessionMode || activePanel === title ? "flex" : "none"
    }

    return (
        <section className="panel-container" style={panelStyle}>
            <h2>{title}</h2>
            <Timer title={title} />
        </section>
    )
}