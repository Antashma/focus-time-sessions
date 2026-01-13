export function displayTime(currentDuration) {
	const minutes = Math.floor(currentDuration/60);
	const seconds = Math.floor(currentDuration%60);

	const minSection = minutes < 10
		? "0" + minutes
		: minutes;
	const secSection = seconds < 10
		? "0" + seconds
		: seconds;

	return `${minSection}:${secSection}`;
}
