const RESERVE_SERVICE = 'RESERVE_SERVICE';
const GET_RESERVED_SERVICES = 'GET_RESERVED_SERVICES';
const DELETE_SERVICE_RESERVE = 'DELETE_SERVICE_RESERVE';
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
