import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CATEGORYLIST } from '../../constants';
import { setPage } from '../../redux/reducer/pageSlice';
import { useAppDispatch } from '../../redux/store';
import * as t from '../../style/listCategory.style';

type TProps = {
  category: string;
};

function ListCategory({ category }: TProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCategory, setCurrentCategory] = useState<string>(category);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const selectedCategory = e.currentTarget.value;
    setCurrentCategory(selectedCategory);
    navigate(`/list/${selectedCategory}`);
  };

  useEffect(() => {
    searchParams.set('sort', 'recent');
    setSearchParams(searchParams);
    dispatch(setPage(1));
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
