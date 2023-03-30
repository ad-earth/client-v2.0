import StarRoundedIcon from '@mui/icons-material/StarRounded';
import type { ChangeEvent } from 'react';
import { useRef, useState } from 'react';
import Button from '../../elements/Button';
import useReview from '../../query/useReview';
import { useAppSelector } from '../../redux/store';
import * as t from '../../style/myReviewModal.style';
import ProductCard from '../common/ProductCard';

type TProps = {
  onClose: () => void;
};
interface ReviewType {
  r_Content: string;
  r_Score: number;
}
export default function MyReviewModal({ onClose }: TProps) {
  const { addReview } = useReview();

  const reviewData = useAppSelector(state => state.reviewSlice.review);

  const [reviewState, setReviewState] = useState<ReviewType>({
    r_Content: '',
    r_Score: 5,
  });
  const handleState = (event: ChangeEvent, newValue: number) =>
    setReviewState({ ...reviewState, r_Score: newValue });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setReviewState({ ...reviewState, r_Content: event.target.value });

  const handleReview = () => {
    addReview.mutate({
      id: reviewData.p_No,
      review: reviewState,
    });
    onClose();
  };

  return (
    <t.Base>
      <t.Header>
        <t.Title>구매평 작성</t.Title>
        <t.CloseBtn onClick={onClose} />
      </t.Header>

      <t.BodyFormContainer>
        <t.ProductInfo>
          <ProductCard
            p_Thumbnail={reviewData.p_Thumbnail}
            a_Brand={reviewData.a_Brand}
            p_Name={reviewData.p_Name}
            p_Option={reviewData.p_Option}
          />
        </t.ProductInfo>
        <t.StarRateBox>
          <t.Strong>상품은 어떠셨나요?</t.Strong>
          <t.RatingWrapper
            icon={<StarRoundedIcon fontSize="large" />}
            emptyIcon={<StarRoundedIcon fontSize="large" color="disabled" />}
            name="starIcon"
            size="large"
            value={reviewState.r_Score}
            onChange={() => handleState}
          />
        </t.StarRateBox>
        <t.TextReview>
          <t.Textarea onChange={textAreaChange} ref={textareaRef} />
          <t.TextareaCount>{reviewState.r_Content.length}</t.TextareaCount>
        </t.TextReview>
        <t.GuideText>상품을 구매하신 분들이 작성한 리뷰입니다.</t.GuideText>
      </t.BodyFormContainer>
      <t.BottonBox>
        <Button padding="15px 30px" onClick={handleReview}>
          등록
        </Button>
      </t.BottonBox>
    </t.Base>
  );
}
