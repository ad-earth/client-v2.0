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
type TUserInfo = {
  d_Name: string;
  d_Phone: string;
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
      state.d_Name = action.payload.d_Name;
      state.d_Phone = action.payload.d_Phone;
      state.d_No = action.payload.d_No;
      state.d_Address1 = action.payload.d_Address1;
      state.d_Address2 = action.payload.d_Address2;
      state.d_Address3 = action.payload.d_Address3;
      state.d_Memo = action.payload.d_Memo;
    },
    setUserInfo: (state, action: PayloadAction<TUserInfo>) => {
      state.d_Name = action.payload.d_Name;
      state.d_Phone = action.payload.d_Phone;
    },
    setMemo: (state, action: PayloadAction<string>) => {
      state.d_Memo = action.payload;
    },
  },
});

export const { setPayInfo, setUserInfo, setMemo } = payInputSlice.actions;
export default payInputSlice.reducer;
