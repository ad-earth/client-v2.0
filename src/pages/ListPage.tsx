import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../components/common/CardList';
import ListCategory from '../components/ListCategory';
import useGetListQuery from '../query/useGetListQuery';

const ListPage = () => {
  const { category } = useParams();
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
      <ListCategory setSort={setSort} />
      <CardList
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
