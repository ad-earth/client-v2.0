import * as t from '../style/searchBar.style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [schTrue, setSchTrue] = useState<boolean>(false);

  const handleSubmit = () => {
    navigate(`/search/${keyword}`);
    setSchTrue(true);
  };

  useEffect(() => {
    if (schTrue) {
      setKeyword('');
      setSchTrue(false);
    }
  }, [schTrue]);

  return (
    <t.InputDiv>
      <t.SearchInput
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />
      <AiOutlineSearch />
    </t.InputDiv>
  );
}
