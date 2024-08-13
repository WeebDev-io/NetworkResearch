import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { getCookie } from 'cookies-next';

export const configureAppStore = (initialState = {}) => {
  const preloadedState = {
    themes: {
      currentTheme: getCookie('currentTheme') || 'Light',...initialState.themes,
    },
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};