import * as t from '../../style/pagination.style';

import React, { Dispatch, SetStateAction } from 'react';
import { PaginationItem } from '@mui/material';

const Pagination = ({ pageCnt, page, setPage }: PropsType) => {
  const pageCount = Math.ceil(pageCnt / 20);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  return (
    <t.PaginationRoot
      count={pageCount}
      defaultPage={1}
      page={page}
      onChange={handleChange}
      renderItem={item => <PaginationItem {...item} />}
    />
  );
};

type PropsType = {
  pageCnt: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default Pagination;
