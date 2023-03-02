import React, { useMemo, useState } from 'react';
import ListCards from '../components/ListCards';
import ListCategory from '../components/ListCategory';
import useGetListQuery from '../query/useGetListQuery';

const ListPage = () => {
  const [category, setCategory] = useState<string>('전체');
  const [sort, setSort] = useState<string>('recent');
  const [page, setPage] = useState<number>(1);

  const query = useGetListQuery(category, sort, page);

  const { pageCnt, products, likeList } = useMemo(
    () => ({
      pageCnt: query.data?.data.cnt,
      products: query.data?.data.products,
      likeList: query.data?.data.userLike,
    }),
    [query]
  );

  return (
    <>
      <ListCategory setCategory={setCategory} setSort={setSort} />
      <ListCards
        products={products}
        pageCnt={pageCnt}
        likeList={likeList}
        page={page}
        sort={sort}
        setSort={setSort}
        setPage={setPage}
      />
    </>
  );
};

export default ListPage;
