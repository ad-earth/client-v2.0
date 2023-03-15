import * as t from '../style/detailReviews.style';
import React, { Dispatch, SetStateAction } from 'react';
import { ReviewsType } from '../shared/types/types';
import Pagination from './common/Pagination';

const DetailReviews = ({ reviewQty, reviewList, page, setPage }: PropsType) => {
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
                  <button>삭제</button>
                </t.BtnWrapper>
              </t.WriterInfo>
            </t.ReviewWrapper>
          </t.CommentWrapper>
        ))}
        <t.Page>
          <Pagination
            pageCnt={Math.ceil(reviewQty / 5)}
            page={page}
            setPage={setPage}
          />
        </t.Page>
      </t.List>
    </t.MainContainer>
  );
};

type PropsType = {
  reviewQty: number;
  reviewList: ReviewsType;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default DetailReviews;
