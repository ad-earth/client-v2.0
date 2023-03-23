import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TPaymentInput = {
  d_No: number;
  d_Name: string;
  d_Phone: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Memo?: string;
};
const initialState: TPaymentInput = {
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
    setPayInfo: (state, action: PayloadAction<TPaymentInput>) => {
      return (state = action.payload);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.d_Name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.d_Phone = action.payload;
    },
  },
});

export const { setPayInfo, setName, setPhone } = payInputSlice.actions;
export default payInputSlice.reducer;
