const RESERVE_SERVICE = 'RESERVE_SERVICE';
const GET_RESERVED_SERVICES = 'GET_RESERVED_SERVICES';
const DELETE_SERVICE_RESERVE = 'DELETE_SERVICE_RESERVE';
const API_URL = '/api/v1/reservations';
const reservation = [];

export const reserve = (payload) => ({
  type: RESERVE_SERVICE,
  payload,
});

export const getAllReservation = (payload) => ({
  type: GET_RESERVED_SERVICES,
  payload,
});

export const deleteReservation = (payload) => ({
  type: DELETE_SERVICE_RESERVE,
  payload,
});

export const createReserve = (data) => async () => {
  const response = await fetch(
    API_URL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
  );

  if (response.status === 201) {
    return { message: 'The event has been reserved', status: true };
  }

  return { message: 'The event has not been reserved', status: false };
};

const reserveReducer = (state = reservation, action) => {
  switch (action.type) {
    case RESERVE_SERVICE:
      return [action.payload];
    case GET_RESERVED_SERVICES:
      return action.payload;
    case DELETE_SERVICE_RESERVE:
      return action.payload;
    default:
      return state;
  }
};

export default reserveReducer;
