const initialNavState = {
  navActive: true,
  mainPartialScreen: true,
};

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
