import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from './reducer/authSlice';
import cartSlice from './reducer/cartSlice';
import optionSlice from './reducer/optionSlice';
import pageSlice from './reducer/pageSlice';
import payInputSlice from './reducer/payInputSlice';
import qtySlice from './reducer/qtySlice';
import reviewSlice from './reducer/reviewSlice';

const store = configureStore({
  reducer: {
    optionSlice: optionSlice,
    payInputSlice: payInputSlice,
    cartSlice: cartSlice,
    reviewSlice: reviewSlice,
    pageSlice: pageSlice,
    authSlice: authSlice,
    qtySlice: qtySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
