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

export const HEADCATEGORY = [
  { id: 1, cate: '전체', path: '/list/전체' },
  { id: 2, cate: '욕실', path: '/list/욕실' },
  { id: 3, cate: '주방', path: '/list/주방' },
  { id: 4, cate: '음료용품', path: '/list/음료용품' },
  { id: 5, cate: '생활', path: '/list/생활' },
  { id: 6, cate: '식품', path: '/list/식품' },
  { id: 7, cate: '화장품', path: '/list/화장품' },
  { id: 8, cate: '문구', path: '/list/문구' },
];

export const ASIDECATEGORY = [
  { id: 1, cate: '마이페이지', path: '/mypage' },
  { id: 2, cate: '장바구니', path: '/cart' },
  { id: 3, cate: '주문배송', path: '/mypage' },
  { id: 4, cate: '위시리스트', path: '/mypage' },
];

export const PAYINFOTAB = [
  { id: 'default', title: '기본 배송지' },
  { id: 'before', title: '이전 배송지 선택' },
  { id: 'new', title: '신규 배송지 입력' },
];
export const DELIVERYINFO = [
  { text: '배송 전에 미리 연락바랍니다.' },
  { text: '부재시 경비실에 맡겨주세요.' },
  { text: '부재시 문자나 전화를 남겨주세요.' },
];
export const PAYMENTINFO = [{ text: '지구은행 123456789 (주)광고지구' }];

export const SCROLL_DELTA = 87;
export const HEADER_HEIGHT = 87;

export const CAROUSEL = {
  autoplaySpeed: 3000,
  autoplay: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const REVIEW_PER_PAGE = 5;
