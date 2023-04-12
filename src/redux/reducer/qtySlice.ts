import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: number = 0;

const qtySlice = createSlice({
  name: 'qtySlice',
  initialState,
  reducers: {
    setQty: (state, action: PayloadAction<number>) => {
      return (state = action.payload);
    },
  },
});

export const { setQty } = qtySlice.actions;
export default qtySlice.reducer;
