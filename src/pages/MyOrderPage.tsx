import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import ProductCard from '../components/common/ProductCard';
import useIntersectHandler from '../hooks/useIntersectHandler';
import useViewport from '../hooks/useViewport';
import useGetOrderQuery from '../query/useGetOrderQuery';
import theme from '../shared/style/theme';
import type { ListType, MyAPIResOrder } from '../shared/types/types';
import * as t from '../style/myOrderPage.style';
// import GlobalModal from './common/GlobalModal';
// import MyReviewModal from './MyReviewModal';
// import SmallProductCard from './common/ProductCard';

const getList = (data: MyAPIResOrder): ListType[] => {
  if ('orderList' in data) return data.orderList;
  else return data.cancelList;
};

export default function MyOrderPage() {
  const pathPattern = useLocation();
  const [, path] = pathPattern.pathname.split('/');

  const navigate = useNavigate();
  const viewport = useViewport();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    isLoading,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetOrderQuery(path);

  /** Data Filtering */
  const orderData = useMemo(
    () => data?.pages.map(page => getList(page?.data)).flat() || null,
    [data]
  );

  /** Browser IntersectionObserver */
  const target = useIntersectHandler(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  });

  const reviweBtnClick = () => setIsModalOpen(!isModalOpen);
  const reviewModal = isModalOpen && (
    // <GlobalModal onClose={() => setIsModalOpen(false)}>
    //   <MyReviewModal />
    // </GlobalModal>
    <></>
  );
  const cancelBtnClick = (item: ListType) =>
    navigate(`cancel-call/${item.o_No}`);

  if (isLoading) return <p>Loading...</p>;
  if (orderData.length === 0)
    return <t.DataNull>주문 내역이 없습니다.</t.DataNull>;

  return (
    <t.Section>
      {reviewModal}
      <t.Title>주문조회</t.Title>
      <t.Article>
        {orderData.map((list, i) => (
          <t.OrderList key={i}>
            <t.TopInfo>
              <t.OrderNumber>
                <t.Label> 주문번호 </t.Label>
                <t.ProductLink to={`${list.o_No}`} className="link">
                  <span>
                    {viewport > 990 ? `${list.o_No}` : '주문상세보기'}
                  </span>
                  <t.ArrowIcon />
                </t.ProductLink>
              </t.OrderNumber>
              <t.Date>
                <t.Label> 주문일자 </t.Label>
                <span>{list.o_Date}</span>
              </t.Date>
            </t.TopInfo>
            <t.Main>
              {list.products.map((item: any, idx: number) => (
                <t.Container key={idx}>
                  <t.ProductWrapper>
                    <t.ProductLink to={`${list.o_No}`} className="link">
                      <ProductCard
                        p_Thumbnail={item.p_Thumbnail}
                        a_Brand={item.a_Brand}
                        p_Name={item.p_Name}
                        p_Option={item.p_Option}
                      />
                      <t.ProductStatus>{item.o_Status}</t.ProductStatus>
                    </t.ProductLink>
                  </t.ProductWrapper>
                  <t.ActionButtonContainer>
                    {item.o_Status === '주문완료' && (
                      <Button
                        {...cancelStyle}
                        onClick={() => cancelBtnClick(list)}
                      ></Button>
                    )}
                    {item.p_Status && item.r_Status && (
                      <Button
                        {...reviweStyle}
                        onClick={() => reviweBtnClick()}
                      ></Button>
                    )}
                  </t.ActionButtonContainer>
                </t.Container>
              ))}
            </t.Main>
          </t.OrderList>
        ))}
      </t.Article>
      {isFetching && !isFetchingNextPage ? (
        'Loading more...'
      ) : (
        <div ref={target}></div>
      )}
    </t.Section>
  );
}

const cancelStyle = {
  bgColor: 'transparent',
  radius: '30px',
  border: `1px solid ${theme.rgba04}`,
  hBgColor: 'transparent',
  hBorder: `1px solid ${theme.rgba08}`,
  hColor: `${theme.fc14}`,
  color: `${theme.fc14}`,
  fontSize: `${theme.fc12}`,
  fontWeight: '500',
  padding: '10px 16px',
  text: '취소',
};
const reviweStyle = {
  radius: '30px',
  fontSize: `${theme.fs12}`,
  fontWeight: '500',
  padding: '10px 16px',
  text: '구매평 작성',
};
