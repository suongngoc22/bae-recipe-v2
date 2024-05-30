import { unauthorizedReducer } from './unauthorizedReducer';
import { combineReducers } from '@reduxjs/toolkit';
import { mealReducer } from './mealReducer';

export default combineReducers({
    meal: mealReducer,
    unauthorized: unauthorizedReducer
})