'use client';
import { combineReducers } from 'redux';
import themesReducer from './slices/themesSlice';

const rootReducer = combineReducers({ themes: themesReducer, });

export default rootReducer;
