import * as t from '../style/searchPage.style';

import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetAdListQuery from '../query/useGetAdListQuery';
import SearchCards from '../components/SearchCards';

const SearchPage = () => {
  const { keyword } = useParams();
  const [page, setPage] = useState<number>(1);

  const query = useGetAdListQuery(keyword, page);

  const { pageCnt, products, ads, likeList } = useMemo(
    () => ({
      pageCnt: query.data?.data.cnt,
      products: query.data?.data.products,
      ads: query.data?.data.adProducts,
      likeList: query.data?.data.userLike,
    }),
    [query]
  );

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
};

export default SearchPage;
