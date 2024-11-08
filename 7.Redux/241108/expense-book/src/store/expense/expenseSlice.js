import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      console.log("add action!");

      currentSlice.expenseList.push(action.payload);
    },
  },
});

const { addExpenseAction } = expenseSlice.actions;

export { expenseSlice, addExpenseAction };
