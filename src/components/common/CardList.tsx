import * as t from '../../style/cardList.style';

import React, { Dispatch, SetStateAction, useState } from 'react';
import theme from '../../shared/style/theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Card from './Card';
import { ProductType } from '../../shared/types/types';
import Pagination from './Pagination';

const CardList = ({
  pageCnt,
  ads,
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
      {!ads && (
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
      )}
      {ads && ads?.length === 0 ? (
        <p>등록된 상품이 없습니다.</p>
      ) : (
        <t.Wrapper>
          {products?.map(el => (
            <Card key={el.p_No} isAd={true} product={el} likeList={likeList} />
          ))}
        </t.Wrapper>
      )}
      {products?.length === 0 ? (
        <p>등록된 상품이 없습니다.</p>
      ) : (
        <t.Wrapper>
          {products?.map(el => (
            <Card key={el.p_No} isAd={false} product={el} likeList={likeList} />
          ))}
        </t.Wrapper>
      )}
      <Pagination pageCnt={pageCnt} page={page} setPage={setPage} />
    </t.Container>
  );
};

type PropsType = {
  pageCnt: number;
  ads?: ProductType[];
  products: ProductType[];
  likeList: number[];
  page: number;
  sort?: string;
  setSort?: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
};

export default CardList;
