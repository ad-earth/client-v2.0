import * as t from '../style/listCards.style';

import React, { Dispatch, SetStateAction, useState } from 'react';
import theme from '../shared/style/theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Card from './common/Card';
import { ProductType } from '../shared/types/types';
import Pagination from './common/Pagination';

const ListCards = ({
  pageCnt,
  products,
  likeList,
  page,
  sort,
  setSort,
  setPage,
}: PropsType) => {
  const [select, setSelect] = useState<boolean>(false);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSort(e.target.value);
  };

  return (
    <t.Container>
      <t.SelectWrap>
        <FormControl
          variant="standard"
          sx={{ m: 2, minWidth: 90 }}
          size="small"
        >
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={select}
            onClose={() => setSelect(false)}
            onOpen={() => setSelect(true)}
            onChange={handleChange}
            value={sort}
            label="sort"
            style={{ fontSize: `${theme.fs15}`, color: `${theme.fc08}` }}
          >
            <MenuItem value="recent">등록순</MenuItem>
            <MenuItem value="like">인기순</MenuItem>
          </Select>
        </FormControl>
      </t.SelectWrap>
      <t.Wrapper>
        <Card list={products} likeList={likeList} />
      </t.Wrapper>
      <Pagination pageCnt={pageCnt} page={page} setPage={setPage} />
    </t.Container>
  );
};

type PropsType = {
  pageCnt: number;
  products: ProductType[];
  likeList: number[];
  page: number;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
};

export default ListCards;
