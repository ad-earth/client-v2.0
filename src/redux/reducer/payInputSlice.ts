import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TPaymentInfo = {
  d_No: number;
  d_Name: string;
  d_Phone: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Memo?: string;
};
const initialState: TPaymentInfo = {
  d_No: null,
  d_Name: '',
  d_Phone: '',
  d_Address1: '',
  d_Address2: '',
  d_Address3: '',
  d_Memo: '배송메모가 없습니다.',
};

const payInputSlice = createSlice({
  name: 'payInputSlice',
  initialState,
  reducers: {
    setPayInfo: (state, action: PayloadAction<TPaymentInfo>) => {
      return (state = action.payload);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.d_Name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.d_Phone = action.payload;
    },
    setDNumber: (state, action: PayloadAction<number>) => {
      state.d_No = action.payload;
    },
    setAddress1: (state, action: PayloadAction<string>) => {
      state.d_Address1 = action.payload;
    },
    setAddress2: (state, action: PayloadAction<string>) => {
      state.d_Address2 = action.payload;
    },
    setAddress3: (state, action: PayloadAction<string>) => {
      state.d_Address3 = action.payload;
    },
    setMemo: (state, action: PayloadAction<string>) => {
      state.d_Memo = action.payload;
    },
  },
});

export const {
  setPayInfo,
  setName,
  setPhone,
  setDNumber,
  setAddress1,
  setAddress2,
  setAddress3,
  setMemo,
} = payInputSlice.actions;
export default payInputSlice.reducer;
