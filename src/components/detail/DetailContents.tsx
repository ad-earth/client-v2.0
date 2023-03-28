import { useState } from 'react';
import { DELIVERY } from '../../constants';
import useGetReviewsQuery from '../../query/useGetReviewsQuery';
import * as t from '../../style/detailContents.style';
import DetailReviews from './DetailReviews';

type TProps = {
  productNo: number;
  content: string;
};

export default function DetailContents({ productNo, content }: TProps) {
  const [menuSwitch, setMenuSwitch] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const query = useGetReviewsQuery(productNo, page);

  function createMarkup() {
    return { __html: content };
  }

  return (
    <t.Container>
      <t.MenuWrapper>
        <t.Menu onClick={() => setMenuSwitch(false)}>상세정보</t.Menu>
        <t.Menu onClick={() => setMenuSwitch(true)} className="right">
          구매평 ({query.data?.data.p_review})
        </t.Menu>
      </t.MenuWrapper>
      <t.ContentsWrapper>
        {menuSwitch ? (
          <DetailReviews
            reviewQty={query.data?.data.p_review}
            reviewList={query.data?.data.reviews}
            page={page}
            setPage={setPage}
          />
        ) : (
          <t.DescWrapper>
            <div dangerouslySetInnerHTML={createMarkup()}></div>
            <p className="title">배송정보</p>
            <img src={DELIVERY} alt="배송정보" />
            <p>
              - 모든 제품의 배송은 Plastic Free 원칙으로 종이재질로 발송됩니다.
              (종이박스, 종이완충재, 종이테이프)
              <br />
              - 수령하신 택배박스는 운송장을 제거한 후 종이로 분리배출 해주세요.
              <br />
              - 결제완료 후 제품을 수령하시기까지 약 2-5일 소요됩니다.
              <br />- 배송이 늦어지거나 일부 제품이 품절인 경우 개별적으로
              연락을 드리겠습니다.
            </p>
          </t.DescWrapper>
        )}
      </t.ContentsWrapper>
    </t.Container>
  );
}
