import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Pagination from '../../elements/Pagination';
import theme from '../../shared/style/theme';
import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/listCards.style';
import Card from '../common/Card';

type PropsType = {
  pageCnt: number;
  products: IProductCard[];
  likeList: number[];
  page: number;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
};

function ListCards({
  pageCnt,
  products,
  likeList,
  page,
  sort,
  setSort,
  setPage,
}: PropsType) {
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
}

export default ListCards;
