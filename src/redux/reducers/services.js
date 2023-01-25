import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const LOAD = 'gym-instructor-frontend/services/LOAD';

// Api
const url = 'http://127.0.0.1:8080/api/v1/services';

// Redux thunks
export const fetchServices = createAsyncThunk(
  LOAD,
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

// Reducer
export default function servicesReducer(state = [], action = {}) {
  switch (action.type) {
    case `${LOAD}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}
