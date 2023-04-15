import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import * as t from '../style/searchBar.style';

export default function SearchBar() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${keyword}?page=1`);
    setKeyword('');
  };

  return (
    <t.InputDiv>
      <form onSubmit={handleSubmit}>
        <t.SearchInput
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </form>
      <AiOutlineSearch />
    </t.InputDiv>
  );
}
