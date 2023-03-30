import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TAuth = {
  isAuth: boolean;
};
const initialState: TAuth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<TAuth>) => {
      return (state = action.payload);
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
