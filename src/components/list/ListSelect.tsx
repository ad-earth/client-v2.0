import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import theme from '../../shared/style/theme';
import * as t from '../../style/listCards.style';

export default function ListSelect() {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort');

  const handleChange = (e: SelectChangeEvent<string>) => {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
  };

  const toggle = () => setIsSelect(prev => !prev);

  return (
    <t.SelectWrap>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 90 }} size="small">
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isSelect}
          onClose={toggle}
          onOpen={toggle}
          onChange={handleChange}
          defaultValue={sort}
          label="sort"
          style={{ fontSize: `${theme.fs15}`, color: `${theme.fc08}` }}
        >
          <MenuItem value="recent">등록순</MenuItem>
          <MenuItem value="like">인기순</MenuItem>
        </Select>
      </FormControl>
    </t.SelectWrap>
  );
}
