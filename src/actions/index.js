export const setEmailAction = email => ({
  type: 'SET_EMAIL',
  email: email
});

export const setNameAction = name => ({
  type: 'SET_NAME',
  name: name
});

export const setProgressAction = progress => ({
  type: 'SET_PROGRESS',
  progress: progress
});

export const changeActiveTabAction = tab => ({
  type: 'CHANGE_ACTIVE_TAB',
  tab: tab
});

export const saveWeightAction = (exercise, weight, date) => ({
  type: 'SAVE_WEIGHT',
  exercise: exercise,
  weight: weight,
  date: date
});

export const listSwitchAction = () => ({
  type: 'LIST_SWITCH'
});

export const setFetchingAction = isFetching => ({
  type: 'SET_FETCHING',
  isFetching: isFetching
});

export const openMenuAction = isMenuOpen => ({
  type: 'MENU_SWITCH',
  isMenuOpen: isMenuOpen
});
