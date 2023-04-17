import { useParams, useSearchParams } from 'react-router-dom';
import DetailContents from '../components/detail/DetailContents';
import DetailImgs from '../components/detail/DetailImgs';
import DetailInfo from '../components/detail/DetailInfo';
import useDetail from '../query/useDetail';
import * as t from '../style/detailPage.style';

export default function DetailPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const { productNo } = useParams();

  const { product, keyNo, isLike } = useDetail(
    Number(productNo),
    keyword !== 'undefined' ? keyword : null
  );

  return (
    <>
      <t.InfoContainer>
        <DetailImgs product={product} />
        <DetailInfo product={product} keyNo={keyNo} isLike={isLike} />
      </t.InfoContainer>
      <DetailContents content={product?.p_Content} />
    </>
  );
}
