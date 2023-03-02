import * as t from '../../style/badge.style';

import React from 'react';

const Badge = ({ type }: BadgeType) => {
  return (
    <t.Container>
      <t.BadgeBox type={type}>{type}</t.BadgeBox>
    </t.Container>
  );
};

export interface BadgeType {
  type: 'NEW' | 'BEST' | 'SALE' | 'SOLDOUT' | 'AD';
}

export default Badge;
