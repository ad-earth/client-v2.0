import { Skeleton } from '@mui/material';
import * as t from '../../style/card.style';

export default function SkeletonCard() {
  return (
    <>
      {Array(6)
        .fill(1)
        .map((_, idx) => (
          <t.Container key={idx}>
            <t.ImgWrapper>
              <Skeleton width="100%" height={200} />
            </t.ImgWrapper>
            <t.Name>
              <Skeleton />
            </t.Name>
            <Skeleton />
          </t.Container>
        ))}
    </>
  );
}
