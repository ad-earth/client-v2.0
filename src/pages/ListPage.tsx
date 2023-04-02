import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ListCards from '../components/list/ListCards';
import ListCategory from '../components/list/ListCategory';
import useProduct from '../query/useProduct';
import { useAppSelector } from '../redux/store';

function ListPage() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const page = useAppSelector(state => state.pageSlice);

  const { totalPages, products, likeList } = useProduct({
    page: page,
    category: category,
    sort: sort,
  });

  useEffect(() => {
    searchParams.set('sort', 'recent');
    setSearchParams(searchParams);
  }, []);

  return (
    <>
      <ListCategory category={category} />
      <ListCards
        products={products}
        totalPages={totalPages}
        likeList={likeList}
      />
    </>
  );
}

export default ListPage;
