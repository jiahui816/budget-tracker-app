import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budgetValue: 3,
  },
  reducers: {
    changeBudget: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeBudget } = budgetSlice.actions;

export const selectBudget = (state) => state.budget.value;

export default budgetSlice.reducer;
