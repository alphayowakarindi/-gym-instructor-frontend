const initialNavState = {
  navActive: true,
  mainPartialScreen: true,
};

// NOTE:
// It is important to pass an initial state as default to
// the state parameter to handle the case of calling
// the reducers for the first time when the
// state might be undefined

export default function toggleNavActiveReducer(state = initialNavState, action) {
  switch (action.type) {
    case 'TOGGLE_NAV_ACTIVE':
      return {
        ...state,
        navActive: !state.navActive,
        mainPartialScreen: !state.mainPartialScreen,
      };
    default:
      return state;
  }
}
