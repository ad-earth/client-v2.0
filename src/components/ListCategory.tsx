import * as t from '../style/listCategory.style';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListCategory = ({ setCategory, setSort }: PropsType) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState<string>('전체');

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    let category = e.currentTarget.value;
    setCategory(category);
    setCurrent(category);
    setSort('recent');
    navigate(`/list/${category}`);
  };

  return (
    <t.Category>
      <t.Wrapper>
        {categoryList.map(val => {
          return (
            <t.Button
              onClick={handleClick}
              key={val}
              value={val}
              active={current === val}
            >
              {val}
            </t.Button>
          );
        })}
      </t.Wrapper>
      <t.Line />
    </t.Category>
  );
};

type PropsType = {
  setCategory: Dispatch<SetStateAction<string>>;
  setSort: Dispatch<SetStateAction<string>>;
};

const categoryList = [
  '전체',
  '욕실',
  '주방',
  '음료',
  '생활',
  '식품',
  '화장품',
  '문구',
];

export default ListCategory;
