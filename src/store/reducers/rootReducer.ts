import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;