const defaultState = {
  email: '',
  name: '',
  isFetching: false,
  activeTab: 'BAR_CURL',
  listEnabled: false,
  isMenuOpen: false
};

const reducer = (state = defaultState, action) => {
  let weight = action.weight;
  let date = action.date;
  let entry = { date: date, weight: weight };
  let exercise = action.exercise;

  switch (action.type) {
    case 'MENU_SWITCH':
      return { ...state, isMenuOpen: action.isMenuOpen };
    case 'LIST_SWITCH':
      return { ...state, listEnabled: !state.listEnabled };
    case 'SET_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'SET_EMAIL':
      return { ...state, email: action.email };
    case 'SET_NAME':
      return { ...state, name: action.name };
    case 'CHANGE_ACTIVE_TAB':
      return { ...state, activeTab: action.tab };
    case 'SAVE_WEIGHT':
      return {
        ...state,
        progress: {
          ...state.progress,
          [exercise]: [...state.progress[exercise], entry]
        }
      };
    default:
      return state;
  }
};

export default reducer;
