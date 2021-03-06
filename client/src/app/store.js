import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../features/budgetSlice';

export default configureStore({
  reducer: {
    budget: budgetReducer,
  },
});
