import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from './reducer/cartSlice';
import optionSlice from './reducer/optionSlice';
import payInputSlice from './reducer/payInputSlice';

const store = configureStore({
  reducer: {
    optionSlice: optionSlice,
    payInputSlice: payInputSlice,
    cartSlice: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
