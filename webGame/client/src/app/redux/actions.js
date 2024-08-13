export const SET_CHOOSE_USER = 'SET_CHOOSE_USER';
export const SET_IS_BLOCKED = 'SET_IS_BLOCKED';
export const SET_IS_FRIEND = 'SET_IS_FRIEND';
// Define other action types as needed...

export const setChooseUser = (user) => ({
  type: SET_CHOOSE_USER,
  payload: user
});

export const setIsBlocked = (value) => ({
  type: SET_IS_BLOCKED,
  payload: value
});

export const setIsFriend = (value) => ({
  type: SET_IS_FRIEND,
  payload: value
});