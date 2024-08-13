import { SET_CHOOSE_USER, SET_IS_BLOCKED, SET_IS_FRIEND } from './actions';

const initialState = {
  chooseUser: null,
  isBlocked: false,
  isFriend: false,
  // Define other initial state properties...
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOOSE_USER:
      return { ...state, chooseUser: action.payload };
    case SET_IS_BLOCKED:
      return { ...state, isBlocked: action.payload };
    case SET_IS_FRIEND:
      return { ...state, isFriend: action.payload };
    // Handle other action types...
    default:
      return state;
  }
};

export default reducer;