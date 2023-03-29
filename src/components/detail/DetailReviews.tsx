import type { Dispatch, SetStateAction } from 'react';
import Pagination from '../../elements/Pagination';
import useDeleteReview from '../../query/useDeleteReview';
import type { TReviews } from '../../shared/types/types';
import * as t from '../../style/detailReviews.style';

function DetailReviews({ reviewQty, reviewList }: PropsType) {
  const { mutate } = useDeleteReview();

  const handleClick = (reviewNo: number) => {
    mutate(reviewNo);
  };

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
                  {Array.from({ length: review.r_Score }, (star, idx) => (
                    <t.IcStar key={idx} />
                  ))}
                </t.StarWrapper>
                {review.r_Content}
              </t.CommentText>
              <t.WriterInfo>
                {review.u_Id.substring(0, review.u_Id.length - 3) + '***'}
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
          <Pagination pageCnt={Math.ceil(reviewQty / 5)} />
        </t.Page>
      </t.List>
    </t.MainContainer>
  );
}

type PropsType = {
  reviewQty: number;
  reviewList: TReviews;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default DetailReviews;
