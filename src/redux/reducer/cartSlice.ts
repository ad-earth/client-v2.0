import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TCartList = {
  p_No: number;
  p_Price: number;
};

type TCart = {
  checkedList: TCartList[];
};

const initialState: TCart = {
  checkedList: [
    {
      p_No: 0,
      p_Price: 0,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCheckedList: (state, action: PayloadAction<TCartList[]>) => {
      state.checkedList = action.payload;
    },
  },
});

export const { setCheckedList } = cartSlice.actions;
export default cartSlice.reducer;
