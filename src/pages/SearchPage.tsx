import {
  ScrollRestoration,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import SearchCards from '../components/search/SearchCards';
import useProduct from '../query/useProduct';
import * as t from '../style/searchPage.style';

export default function SearchPage() {
  const { keyword } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  const {
    pageCnt,
    productList: products,
    adProducts: ads,
    likeProducts: likeList,
  } = useProduct({
    page: Number(page),
    keyword: keyword,
  });

  return (
    <>
      <ScrollRestoration />
      <t.Container>
        "{keyword}" 검색 결과 {products?.length + ads?.length}개
      </t.Container>
      <SearchCards
        pageCnt={pageCnt}
        ads={ads}
        products={products}
        likeList={likeList}
      />
    </>
  );
}
