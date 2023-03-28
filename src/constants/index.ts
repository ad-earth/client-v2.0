const CLIENTIMG = process.env.REACT_APP_BUCKET_URL + '/CLIENTIMG';

export const BANNER = [
  {
    id: 1,
    category: '생활',
    url1: `${CLIENTIMG}/banner1.webp`,
    url2: `${CLIENTIMG}/banner990_1.webp`,
  },
  {
    id: 2,
    category: '욕실',
    url1: `${CLIENTIMG}/banner2.webp`,
    url2: `${CLIENTIMG}/banner990_2.webp`,
  },
  {
    id: 3,
    category: '주방',
    url1: `${CLIENTIMG}/banner3.webp`,
    url2: `${CLIENTIMG}/banner990_3.webp`,
  },
];
export const GROCERY = `${CLIENTIMG}/post1.webp`;
export const INSTA = `${CLIENTIMG}/post2.webp`;
export const PLASTIC = `${CLIENTIMG}/post3.webp`;
export const DELIVERY = `${CLIENTIMG}/shippinginfo.webp`;

export const CATEGORYLIST = [
  '전체',
  '욕실',
  '주방',
  '음료용품',
  '생활',
  '식품',
  '화장품',
  '문구',
];
