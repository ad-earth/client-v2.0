import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: (string | number)[][] = [];

const optionSlice = createSlice({
  name: 'optionSlice',
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<(string | number)[]>) => {
      state.push(action.payload);
    },

    deleteOption: (state, action: PayloadAction<(string | number)[]>) => {
      const newState = state.filter(item =>
        item[0] ? item[0] !== action.payload[0] : item[2] !== action.payload[2]
      );
      return newState;
    },

    updateOption: (state, action: PayloadAction<(string | number)[]>) => {
      const newState = state.map(item =>
        item[0] === action.payload[0] ? [...action.payload] : item
      );
      return newState;
    },

    resetOptions: (state, action: PayloadAction<(string | number)[][]>) => {
      return (state = action.payload);
    },
  },
});

export const { addOption, deleteOption, updateOption, resetOptions } =
  optionSlice.actions;
export default optionSlice.reducer;
