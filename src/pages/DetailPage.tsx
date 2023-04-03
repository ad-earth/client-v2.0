import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import DetailContents from '../components/detail/DetailContents';
import DetailImgs from '../components/detail/DetailImgs';
import DetailInfo from '../components/detail/DetailInfo';
import useDetail from '../query/useDetail';
import * as t from '../style/detailPage.style';

export default function DetailPage() {
  const location = useLocation();
  const { keyword } = location.state as { keyword: string | null };
  const { productNo } = useParams();

  const { product, keyNo, isLike } = useDetail(Number(productNo), keyword);

  return (
    <>
      <t.InfoContainer>
        <ScrollRestoration />
        <DetailImgs product={product} />
        <DetailInfo product={product} keyNo={keyNo} isLike={isLike} />
      </t.InfoContainer>
      <DetailContents
        productNo={parseInt(productNo)}
        content={product?.p_Content}
      />
    </>
  );
}
