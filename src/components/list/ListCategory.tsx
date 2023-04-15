import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CATEGORYLIST } from '../../constants';
import * as t from '../../style/listCategory.style';

type TProps = {
  category: string;
};

function ListCategory({ category }: TProps) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCategory, setCurrentCategory] = useState<string>(category);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const selectedCategory = e.currentTarget.value;
    setCurrentCategory(selectedCategory);
    navigate(`/list/${selectedCategory}`);
  };

  useEffect(() => {
    searchParams.set('sort', 'recent');
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  }, [currentCategory]);

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

export default ListCategory;
