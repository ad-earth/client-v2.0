import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalModal from '../components/common/GlobalModal';
import MyOrderInfo from '../components/MyOrderInfo';
import MyOrderList from '../components/MyOrderList';
import MyReviewModal from '../components/MyReviewModal';
import useIntersectHandler from '../hooks/useIntersectHandler';
import useGetOrderQuery from '../query/useGetOrderQuery';
import type { IList, TResOrder } from '../shared/types/types';
import * as t from '../style/myOrderPage.style';

export default function MyOrderPage() {
  const pathPattern = useLocation();
  const [, path] = pathPattern.pathname.split('/');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    isLoading,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetOrderQuery(path);

  const getList = (list: TResOrder): IList[] => {
    if ('orderList' in list) return list.orderList;
    else return list.cancelList;
  };

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

  const reviewModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <MyReviewModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <t.Base>
      {reviewModal}
      <t.Title>주문조회</t.Title>
      <t.Article>
        {orderData.length === 0 && (
          <t.DataNull>주문 내역이 없습니다.</t.DataNull>
        )}
        {orderData.map((list, i) => (
          <t.OrderList key={i}>
            <MyOrderInfo list={list} />
            <MyOrderList
              products={list.products}
              orderNo={list.o_No}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              type="order"
            />
          </t.OrderList>
        ))}
      </t.Article>
      {isFetching && !isFetchingNextPage ? (
        'Loading more...'
      ) : (
        <div ref={target}></div>
      )}
    </t.Base>
  );
}
