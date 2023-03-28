import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import DetailContents from '../components/detail/DetailContents';
import DetailImgs from '../components/detail/DetailImgs';
import DetailInfo from '../components/detail/DetailInfo';
import useGetDetailQuery from '../query/useGetDetailQuery';
import * as t from '../style/detailPage.style';

function DetailPage() {
  const { productNo } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const query = useGetDetailQuery(parseInt(productNo), null);

  const { product, keyNo, isLike } = useMemo(
    () => ({
      product: query.data?.data.product,
      keyNo: query.data?.data.k_No,
      isLike: query.data?.data.userLike,
    }),
    [query]
  );

  return (
    <>
      <t.InfoContainer>
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
