import { configureStore } from '@reduxjs/toolkit';
import toggleNavActiveReducer from './reducers/toggleNavActive';
import servicesReducer from './reducers/services';

const store = configureStore({
  reducer: {
    classStatus: toggleNavActiveReducer,
    services: servicesReducer,
  },
});
export default store;
