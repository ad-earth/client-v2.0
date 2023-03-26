import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GlobalModal from '../components/common/GlobalModal';
import MyOrderAmount from '../components/MyOrderAmount';
import MyOrderList from '../components/MyOrderList';
import MyReviewModal from '../components/MyReviewModal';
import useGetOrderDetail from '../query/useGetOrderDetail';
import * as t from '../style/myOrderDetailPage.style';

export default function MyOrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // const viewport = useViewport();
  const { isLoading, data } = useGetOrderDetail(id);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /** Data Filtering */
  const products = useMemo(() => data?.data.products || [], [data]);
  const cancelPrice = useMemo(
    () =>
      data?.data.products
        .map(el => el.o_Status === '취소완료' && el.p_Price)
        .reduce((prev, curr) => prev + curr, 0),
    [data?.data.products]
  );

  const reviewModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <MyReviewModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <t.Base>
      {reviewModal}
      <t.Title>
        <t.BackIcon onClick={() => navigate(-1)} />
        주문 상세 내역
      </t.Title>
      <>
        <t.OrderNumerArticle>
          <t.OrderDate>
            <t.Label>주문일자 </t.Label>
            <t.Strong>{data?.data.o_Date}</t.Strong>
          </t.OrderDate>
          <t.OrderNumberInfo>
            <t.Label>주문번호</t.Label>
            <t.Strong>{data?.data.o_No}</t.Strong>
          </t.OrderNumberInfo>
        </t.OrderNumerArticle>

        <t.OrderListArticle>
          <t.ListHead>
            <t.ListTh>상품정보</t.ListTh>
            <t.ListTh>주문 상태</t.ListTh>
          </t.ListHead>
          <MyOrderList
            products={products}
            orderNo={data?.data.o_No}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            type="detail"
          />
        </t.OrderListArticle>

        <t.OrderUserArticle>
          <t.SubTitle>구매자 정보</t.SubTitle>
          <t.Contents>
            <t.Item>
              <t.Label>주문자</t.Label>
              {data?.data.userInfo.u_Name}
            </t.Item>
            <t.Item>
              <t.Label>연락처</t.Label>
              {data?.data.userInfo.u_Phone}
            </t.Item>
          </t.Contents>
        </t.OrderUserArticle>

        <t.OrderAddressArticle>
          <t.SubTitle>배송지 정보</t.SubTitle>
          <t.Contents>
            <t.Item>
              <t.Label>수령인</t.Label>
              {data?.data.address.d_Name}
            </t.Item>
            <t.Item>
              <t.Label>연락처</t.Label>
              {data?.data.address.d_Phone}
            </t.Item>
            <t.Item>
              <t.Label>배송지</t.Label>
              {data?.data.address.d_Address1}
              <br />
              {data?.data.address.d_Address2}
            </t.Item>
            <t.Item>
              <t.Label>베송메모</t.Label>
              {data?.data.address.d_Memo}
            </t.Item>
          </t.Contents>
        </t.OrderAddressArticle>

        <t.OrderPriceArticle></t.OrderPriceArticle>

        <t.OrderPriceArticle>
          <MyOrderAmount price={data.data.o_Price} />
          {cancelPrice > 0 && (
            <MyOrderAmount
              price={data.data.o_Price}
              cancelPrice={cancelPrice}
            />
          )}
        </t.OrderPriceArticle>
      </>
    </t.Base>
  );
}
