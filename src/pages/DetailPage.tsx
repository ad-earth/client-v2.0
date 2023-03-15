import * as t from '../style/detailPage.style';

import React, { useEffect, useMemo } from 'react';
import DetailImgs from '../components/DetailImgs';
import useGetDetailQuery from '../query/useGetDetailQuery';
import DetailInfo from '../components/DetailInfo';
import { useParams } from 'react-router-dom';
import DetailContents from '../components/DetailContents';

const DetailPage = () => {
  const { productNo } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const query = useGetDetailQuery(parseInt(productNo), null);

  const { product } = useMemo(
    () => ({
      product: query.data?.data.product,
    }),
    [query]
  );

  return (
    <>
      <t.InfoContainer>
        <DetailImgs product={product} />
        <DetailInfo product={product} />
      </t.InfoContainer>
      <DetailContents
        productNo={parseInt(productNo)}
        content={product?.p_Content}
      />
    </>
  );
};

export default DetailPage;
