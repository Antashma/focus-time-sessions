import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: false,
};

export const sessionSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		toggleSessionMode: (state, action) => {
			const sessionValue = action.payload;
			state.mode = sessionValue;
		}
	},
});

export const { toggleSessionMode } = sessionSlice.actions;

export default sessionSlice.reducer;
