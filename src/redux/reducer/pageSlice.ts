import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 1;

const pageSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {
    setPage: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
