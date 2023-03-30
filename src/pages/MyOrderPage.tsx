import { useState } from 'react';
import GlobalModal from '../components/common/GlobalModal';
import MyOrderInfo from '../components/my/MyOrderInfo';
import MyOrderList from '../components/my/MyOrderList';
import MyReviewModal from '../components/my/MyReviewModal';
import useIntersectHandler from '../hooks/useIntersectHandler';
import useOrder from '../query/useOrder';
import * as t from '../style/myOrderPage.style';

export default function MyOrderPage() {
  const {
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    orderData,
  } = useOrder();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const reviewModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <MyReviewModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  /** Browser IntersectionObserver */
  const target = useIntersectHandler(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <t.Base>
      {reviewModal}
      <t.Title>주문조회</t.Title>
      <t.Article>
        {orderData?.length === 0 && (
          <t.DataNull>주문 내역이 없습니다.</t.DataNull>
        )}
        {orderData?.map((list, i) => (
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
