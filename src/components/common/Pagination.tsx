import { PaginationItem } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import * as t from '../../style/pagination.style';

function Pagination({ pageCnt, page, setPage }: PropsType) {
  const pageCount = Math.ceil(pageCnt / 20);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

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

type PropsType = {
  pageCnt: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default Pagination;
