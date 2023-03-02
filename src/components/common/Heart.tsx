import * as t from '../../style/heart.style';

import React, { useState } from 'react';
import usePostLikeQuery from '../../query/usePostLikeQuery';

const Heart = ({ likeCnt, productNo, likeList }: PropsType) => {
  const { mutate } = usePostLikeQuery(productNo);
  const [isLike, setIsLike] = useState<boolean>(likeList.includes(productNo));

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
};

type PropsType = {
  productNo: number;
  likeCnt: number;
  likeList: number[];
};

export default Heart;
