import { configureStore } from '@reduxjs/toolkit';
import toggleNavActiveReducer from './reducers/toggleNavActive';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    classStatus: toggleNavActiveReducer,
    user: userReducer,
  },
});
export default store;
