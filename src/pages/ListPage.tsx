import {
  ScrollRestoration,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import ListCards from '../components/list/ListCards';
import ListCategory from '../components/list/ListCategory';
import useProduct from '../query/useProduct';

function ListPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');

  const { totalPages, products, likeList } = useProduct({
    page: Number(page),
    category: category,
    sort: sort,
  });

  return (
    <>
      <ScrollRestoration />
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
