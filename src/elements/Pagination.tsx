import { PaginationItem } from '@mui/material';
import React from 'react';
import { setPage } from '../redux/reducer/pageSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import * as t from '../style/pagination.style';

type PropsType = {
  pageCnt: number;
};

export default function Pagination({ pageCnt }: PropsType) {
  const dispatch = useAppDispatch();
  const pageCount = Math.ceil(pageCnt / 20);
  const page = useAppSelector(state => state.pageSlice);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) =>
    dispatch(setPage(value));

  return (
    <t.PaginationRoot
      count={pageCount ? pageCount : 1}
      defaultPage={1}
      page={page}
      onChange={handleChange}
      renderItem={item => <PaginationItem {...item} />}
    />
  );
}
