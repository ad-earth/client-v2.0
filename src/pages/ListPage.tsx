import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ListCards from '../components/list/ListCards';
import ListCategory from '../components/list/ListCategory';
import useProduct from '../query/useProduct';

function ListPage() {
  const { category } = useParams();
  const [sort, setSort] = useState<string>('recent');
  const [page, setPage] = useState<number>(1);

  const { totalPages, products, likeList } = useProduct(category, sort, page);

  return (
    <>
      <ListCategory category={category} setSort={setSort} />
      <ListCards
        products={products}
        totalPages={totalPages}
        likeList={likeList}
        page={page}
        sort={sort}
        setSort={setSort}
        setPage={setPage}
      />
    </>
  );
}

export default ListPage;
