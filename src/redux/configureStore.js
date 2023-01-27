import { configureStore } from '@reduxjs/toolkit';
import toggleNavActiveReducer from './reducers/toggleNavActive';
import servicesReducer from './reducers/services';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    classStatus: toggleNavActiveReducer,
    services: servicesReducer,
    user: userReducer,
  },
});
export default store;
