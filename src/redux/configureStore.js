import { configureStore } from '@reduxjs/toolkit';
import toggleNavActiveReducer from './reducers/toggleNavActive';

const store = configureStore({
  reducer: {
    classStatus: toggleNavActiveReducer,
  },
});
export default store;
