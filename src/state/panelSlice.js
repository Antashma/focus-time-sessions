import { createSlice } from "@reduxjs/toolkit";
import breakEndSound from "../assets/Start_Game.wav"
import focusEndSound from "../assets/Level_Complete.wav"

const initialState = {
	active: null,
	focus: {
		duration: 60,
		isRunning: false,
		bgColor: "#AA336A",
		fgColor: "#FFB6C1",
		endSound: focusEndSound,
	},
	break : {
		duration: 30,
		isRunning: false,
		bgColor: "#FFB6C1",
		fgColor: "#AA336A",
		endSound: breakEndSound,
	}
};

export const panelSlice = createSlice({
	name: "panel",
	initialState,
	reducers: {
		setActive: (state, action) => {
			const title = action.payload;
			state.active = title;
		},
		decrement: (state, action) => {
			const title = action.payload;
			state[title].duration -= 1;
		},
		toggleRunning: (state, action) => {
			const { title, runValue } = action.payload;
			state[title].isRunning = runValue;
		},
		resetDuration: (state, action) => {
			const title = action.payload;
			state[title].duration = initialState[title].duration;
		},
	},
});

export const { 
	decrement, 
	toggleRunning, 
	resetDuration, 
	setActive 
} = panelSlice.actions;

export default panelSlice.reducer;
