import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budgetValue: 0,
  },
  reducers: {
    changeBudget: (state, action) => {
      state.budgetValue = action.payload;
    },
  },
});

export const { changeBudget } = budgetSlice.actions;

export const selectBudget = (state) => state.budget.budgetValue;

export default budgetSlice.reducer;
