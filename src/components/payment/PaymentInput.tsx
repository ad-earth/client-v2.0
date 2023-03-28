import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { DELIVERYINFO, PAYINFOTAB } from '../../constants';
import usePayment from '../../query/usePayment';
import { setMemo, setPayInfo } from '../../redux/reducer/payInputSlice';
import { useAppDispatch } from '../../redux/store';
import * as t from '../../style/paymentInput.style';
import PayDrop from '../common/PayDrop';
import PaymentAddDefault from './PaymentAddDefault';
import PaymentAddNew from './PaymentAddNew';

type TAddressList = {
  d_No: number;
  u_Idx: number;
  d_Name: string;
  d_Phone: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Memo?: string;
};
type TTab = {
  id: string;
  title: string;
};

export default function PaymentInput({
  addressList,
}: {
  addressList: TAddressList[];
}) {
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState<string>('default');
  const [drop, setDrop] = useState<string>('');

  const handleOpenSelect = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === 'default') setCurrentTab(target.id);
    if (target.id === 'before') setCurrentTab(target.id);
    if (target.id === 'new') setCurrentTab(target.id);
  };

  const handleCheck = (checked: boolean, item: TAddressList) => {
    if (checked) {
      const data = {
        d_No: item.d_No,
        d_Name: item.d_Name,
        d_Phone: item.d_Phone,
        d_Address1: item.d_Address1,
        d_Address2: item.d_Address2,
        d_Address3: item.d_Address3,
        d_Memo: drop && drop,
      };
      dispatch(setPayInfo(data));
    }
  };

  const { deletePayAddress } = usePayment();
  const handleDelete = (d_No: number) => {
    deletePayAddress.mutate(d_No, {
      onSuccess: () => {
        toast.success('이전 배송지 정보를 삭제하였습니다.');
      },
    });
  };

  useEffect(() => {
    if (drop) dispatch(setMemo(drop));
  }, [drop]);

  return (
    <>
      <t.Container>
        <t.Content>
          <t.Tab>
            {PAYINFOTAB.map((item: TTab, idx: number) => (
              <t.Title
                key={idx}
                id={item.id}
                className={currentTab === item.id ? 'isActive' : 'isNotActive'}
                onClick={handleOpenSelect}
              >
                {item.title}
              </t.Title>
            ))}
          </t.Tab>
          {currentTab === 'default' && (
            <PaymentAddDefault
              isTabOpen={currentTab === 'default' ? true : false}
            />
          )}
          {currentTab === 'before' && (
            <>
              {addressList.map(item => (
                <t.ShipList key={item.d_No}>
                  <input
                    type="radio"
                    id={String(item.d_No)}
                    name="addressCheck"
                    onClick={e => handleCheck(e.currentTarget.checked, item)}
                  />
                  <t.InfoWrap>
                    <label htmlFor={String(item.d_No)}>{item.d_Name}</label>
                    <p>{item.d_Phone}</p>
                    <p>{item.d_Address2}</p>
                    <p>{item.d_Address3}</p>
                    <p>({item.d_Address1})</p>
                  </t.InfoWrap>
                  <p onClick={() => handleDelete(item.d_No)}>삭제</p>
                </t.ShipList>
              ))}
            </>
          )}
          {currentTab === 'new' && (
            <PaymentAddNew isTabOpen={currentTab === 'new' ? true : false} />
          )}
        </t.Content>
      </t.Container>
      <h4>배송메모</h4>
      <PayDrop delivery={DELIVERYINFO} drop={drop} setDrop={setDrop} />
    </>
  );
}
