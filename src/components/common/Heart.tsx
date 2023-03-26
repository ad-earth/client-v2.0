import { useEffect, useState } from 'react';
import usePostLikeQuery from '../../query/usePostLikeQuery';
import * as t from '../../style/heart.style';

type TProps = {
  productNo: number;
  likeCnt: number;
  likeList?: number[];
  userLike?: boolean;
};

function Heart({ likeCnt, productNo, likeList, userLike }: TProps) {
  const { mutate } = usePostLikeQuery(productNo);
  const [isLike, setIsLike] = useState<boolean>(false);

  useEffect(() => {
    setIsLike(likeList ? likeList?.includes(productNo) : userLike);
  }, [likeList, productNo, userLike]);

  const handleClick = () =>
    mutate(productNo, {
      onSuccess: () => setIsLike(prev => !prev),
    });

  return (
    <t.Container onClick={handleClick}>
      {isLike ? <t.HeartIcon /> : <t.HeartLineIcon />}
      <t.Count>{likeCnt}</t.Count>
    </t.Container>
  );
}

export default Heart;
