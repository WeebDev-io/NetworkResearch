'use client';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: { rootReducer, }
});
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
