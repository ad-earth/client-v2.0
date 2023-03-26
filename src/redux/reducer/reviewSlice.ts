import { createSlice } from '@reduxjs/toolkit';
import type { TUserOption } from '../../shared/types/types';

type ReviewState = {
  review: {
    p_No: number | null;
    p_Thumbnail: string[] | null;
    a_Brand: string | null;
    p_Name: string | null;
    p_Option: TUserOption[] | null;
    p_Cost: number | null;
    p_Discount: number | null;
  };
};

const initialState: ReviewState = {
  review: {
    p_No: null,
    p_Thumbnail: null,
    a_Brand: null,
    p_Name: null,
    p_Option: null,
    p_Cost: null,
    p_Discount: null,
  },
};

const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  reducers: {
    setReviewData: (state, action) => {
      state.review = action.payload;
    },
  },
});

export const { setReviewData } = reviewSlice.actions;
export default reviewSlice.reducer;
