import { configureStore } from '@reduxjs/toolkit';
import panelReducer from './panelSlice' ;
import sessionReducer from './sessionSlice';

const store = configureStore({
  reducer: {
    panel: panelReducer,
    session: sessionReducer,
  },
});

export default store;