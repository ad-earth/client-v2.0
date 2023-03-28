import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as t from '../../style/listCategory.style';

function ListCategory({ category }: PropsType) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState<string>(category);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    let selectedCategory = e.currentTarget.value;
    setCurrent(selectedCategory);
    searchParams.set('sort', 'current');
    setSearchParams(searchParams);
    navigate(`/list/${selectedCategory}`);
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
}

type PropsType = {
  category: string;
};

const categoryList = [
  '전체',
  '욕실',
  '주방',
  '음료용품',
  '생활',
  '식품',
  '화장품',
  '문구',
];

export default ListCategory;
