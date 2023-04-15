import { PaginationItem } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import * as t from '../style/pagination.style';

type PropsType = {
  pageCnt: number;
};

export default function Pagination({ pageCnt }: PropsType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageCount = Math.ceil(pageCnt / 20);
  const page = searchParams.get('page');

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    searchParams.set('page', String(value));
    setSearchParams(searchParams);
  };

  return (
    <t.PaginationRoot
      count={pageCount ? pageCount : 1}
      defaultPage={1}
      page={Number(page)}
      onChange={handleChange}
      renderItem={item => <PaginationItem {...item} />}
    />
  );
}
