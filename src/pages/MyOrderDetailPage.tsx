import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalModal from '../components/common/GlobalModal';
import MyOrderAmount from '../components/my/MyOrderAmount';
import MyOrderList from '../components/my/MyOrderList';
import MyReviewModal from '../components/my/MyReviewModal';
import useOrderProduct from '../query/useOrderProduct';
import * as t from '../style/myOrderDetailPage.style';

export default function MyOrderDetailPage() {
  const navigate = useNavigate();

  const {
    isLoading,
    date,
    no,
    price,
    address,
    userInfo,
    productData,
    cancelPrice,
  } = useOrderProduct();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
            <t.Strong>{date}</t.Strong>
          </t.OrderDate>
          <t.OrderNumberInfo>
            <t.Label>주문번호</t.Label>
            <t.Strong>{no}</t.Strong>
          </t.OrderNumberInfo>
        </t.OrderNumerArticle>

        <t.OrderListArticle>
          <t.ListHead>
            <t.ListTh>상품정보</t.ListTh>
            <t.ListTh>주문 상태</t.ListTh>
          </t.ListHead>
          <MyOrderList
            products={productData}
            orderNo={no}
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
              {userInfo.u_Name}
            </t.Item>
            <t.Item>
              <t.Label>연락처</t.Label>
              {userInfo.u_Phone}
            </t.Item>
          </t.Contents>
        </t.OrderUserArticle>

        <t.OrderAddressArticle>
          <t.SubTitle>배송지 정보</t.SubTitle>
          <t.Contents>
            <t.Item>
              <t.Label>수령인</t.Label>
              {address.d_Name}
            </t.Item>
            <t.Item>
              <t.Label>연락처</t.Label>
              {address.d_Phone}
            </t.Item>
            <t.Item>
              <t.Label>배송지</t.Label>
              {address.d_Address1}
              <br />
              {address.d_Address2}
            </t.Item>
            <t.Item>
              <t.Label>베송메모</t.Label>
              {address.d_Memo}
            </t.Item>
          </t.Contents>
        </t.OrderAddressArticle>

        <t.OrderPriceArticle></t.OrderPriceArticle>

        <t.OrderPriceArticle>
          <MyOrderAmount price={price} />
          {cancelPrice > 0 && (
            <MyOrderAmount price={price} cancelPrice={cancelPrice} />
          )}
        </t.OrderPriceArticle>
      </>
    </t.Base>
  );
}
