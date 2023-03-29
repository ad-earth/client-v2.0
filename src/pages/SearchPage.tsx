import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchCards from '../components/search/SearchCards';
import useProduct from '../query/useProduct';
import * as t from '../style/searchPage.style';

function SearchPage() {
  const { keyword } = useParams();
  const [page, setPage] = useState<number>(1);

  const {
    pageCnt,
    productList: products,
    adProducts: ads,
    likeProducts: likeList,
  } = useProduct({
    page: page,
    keyword: keyword,
  });

  return (
    <>
      <t.Container>"{keyword}" 검색 결과 0개</t.Container>
      <SearchCards
        pageCnt={pageCnt}
        ads={ads}
        products={products}
        likeList={likeList}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default SearchPage;
