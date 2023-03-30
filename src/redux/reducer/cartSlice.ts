import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TCartList = {
  p_No: number;
  p_Price: number;
};

type TCart = {
  checkedList: TCartList[];
  productNo: number;
  keywordNo: number;
  cartStatus: number;
};

const initialState: TCart = {
  checkedList: [
    {
      p_No: 0,
      p_Price: 0,
    },
  ],
  productNo: 0,
  keywordNo: null,
  cartStatus: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCheckedList: (state, action: PayloadAction<TCartList[]>) => {
      state.checkedList = action.payload;
    },
    setProductNo: (state, action: PayloadAction<number>) => {
      state.productNo = action.payload;
    },
    setKeywordNo: (state, action: PayloadAction<number>) => {
      state.keywordNo = action.payload;
    },
    setCartStatus: (state, action: PayloadAction<number>) => {
      state.cartStatus = action.payload;
    },
  },
});

export const { setCheckedList, setProductNo, setKeywordNo, setCartStatus } =
  cartSlice.actions;
export default cartSlice.reducer;
