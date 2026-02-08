import { createSlice } from "@reduxjs/toolkit";
import breakEndSound from "../assets/Start_Game.wav"
import focusEndSound from "../assets/Level_Complete.wav"

const initialState = {
	active: null,
	endTime: null,
	focus: {
		duration: 1500,
		isRunning: false,
		bgColor: "transparent",
		fgColor: "#fff",
		endSound: focusEndSound,
	},
	break : {
		duration: 300,
		isRunning: false,
		bgColor: "transparent",
		fgColor: "#fff",
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
		setEndTime: (state, action) => {
			if (!state.active) {
				state.endTime = null;
			} else {
				let title = action.payload;
				let durationInMs = state[title].duration * 1000;
				state.endTime = Date.now() + durationInMs;
			}
		},
		decrement: (state, action) => {
			const title = action.payload;
			state[title].duration = Math.ceil((state.endTime - Date.now())/1000);
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
	setActive,
	setEndTime 
} = panelSlice.actions;

export default panelSlice.reducer;
