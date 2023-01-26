import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const LOAD = 'gym-instructor-frontend/services/LOAD';
const GET_SERVICE = 'gym-instructor-frontend/services/GET_SERVICE';

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

export const fetchService = createAsyncThunk(
  GET_SERVICE,
  async (id) => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  },
);

// Reducer
export default function servicesReducer(state = [], action = {}) {
  switch (action.type) {
    case `${LOAD}/fulfilled`:
      return action.payload;
    case `${GET_SERVICE}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}
