import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORYLIST } from '../../constants';
import * as t from '../../style/listCategory.style';

type TProps = {
  category: string;
};

export default function ListCategory({ category }: TProps) {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState<string>(category);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const selectedCategory = e.currentTarget.value;
    setCurrentCategory(selectedCategory);
    navigate(`/list/${selectedCategory}?sort=recent&page=1`);
  };

  return (
    <t.Category>
      <t.Wrapper>
        {CATEGORYLIST.map(val => (
          <t.Button
            onClick={handleClick}
            key={val}
            value={val}
            active={currentCategory === val}
          >
            {val}
          </t.Button>
        ))}
      </t.Wrapper>
      <t.Line />
    </t.Category>
  );
}
