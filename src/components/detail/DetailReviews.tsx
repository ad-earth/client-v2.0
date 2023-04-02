import type { Dispatch, SetStateAction } from 'react';
import { useMemo } from 'react';
import { REVIEW_PER_PAGE } from '../../constants';
import Pagination from '../../elements/Pagination';
import useReview from '../../query/useReview';
import type { TReviews } from '../../shared/types/types';
import * as t from '../../style/detailReviews.style';

type TProps = {
  reviewQty: number;
  reviewList: TReviews;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default function DetailReviews({ reviewQty, reviewList }: TProps) {
  const { mutate } = useReview();

  const handleClick = (reviewNo: number) => mutate(reviewNo);

  const totalPage = useMemo(
    () => Math.ceil(reviewQty / REVIEW_PER_PAGE),
    [reviewQty]
  );

  const maskingName = (userID: string) =>
    userID.substring(0, userID.length - 3) + '***';

  return (
    <t.MainContainer>
      <t.List>
        {reviewQty === 0 ? (
          <p>등록된 리뷰가 없습니다.</p>
        ) : (
          <p>상품을 구매하신 분들이 작성한 리뷰입니다.</p>
        )}

        {reviewList?.map(review => (
          <t.CommentWrapper key={review.r_No}>
            <t.ReviewWrapper>
              <t.CommentText>
                <t.StarWrapper>
                  {Array.from({ length: review.r_Score }, (_, idx) => (
                    <t.IcStar key={idx} />
                  ))}
                </t.StarWrapper>
                {review.r_Content}
              </t.CommentText>
              <t.WriterInfo>
                {maskingName(review.u_Id)}
                <br />
                {review.createdAt}
                <t.BtnWrapper>
                  <button onClick={() => handleClick(review.r_No)}>삭제</button>
                </t.BtnWrapper>
              </t.WriterInfo>
            </t.ReviewWrapper>
          </t.CommentWrapper>
        ))}
        <t.Page>
          <Pagination pageCnt={totalPage} />
        </t.Page>
      </t.List>
    </t.MainContainer>
  );
}
