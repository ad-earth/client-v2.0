import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import DetailContents from '../components/detail/DetailContents';
import DetailImgs from '../components/detail/DetailImgs';
import DetailInfo from '../components/detail/DetailInfo';
import useProduct from '../query/useProduct';
import * as t from '../style/detailPage.style';

function DetailPage() {
  const location = useLocation();
  const { keyword } = location.state as { keyword: string | null };
  const { productNo } = useParams();

  const { product, keyNo, isLike } = useProduct({
    keyword: keyword,
    productNo: Number(productNo),
  });

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

export default DetailPage;
