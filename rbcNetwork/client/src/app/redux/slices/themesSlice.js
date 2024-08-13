import { createSlice } from '@reduxjs/toolkit';
import { saveThemeToLocalStorage, getThemeFromLocalStorage, saveThemeToCookie, getThemeFromCookie } from '../localStorage';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
  currentTheme: getThemeFromCookie() || 'Light',
},
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      saveThemeToLocalStorage(action.payload);
      saveThemeToCookie(action.payload);
    },
  },
});

export const { setTheme } = themesSlice.actions;
export default themesSlice.reducer;