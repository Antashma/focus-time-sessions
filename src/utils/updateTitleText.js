import { displayTime } from "./timerConversions";

export default function updateTitleText(isRunning, panelTitle, duration) {
    const defaultText = "focus time: sessions";
    let titleDOM = document.querySelector("title");

    if (isRunning && duration > 0) {
        titleDOM.textContent = `${panelTitle} | ${displayTime(duration)}`
    } else {
        titleDOM.textContent = defaultText;
    }

}