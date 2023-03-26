import type { Dispatch, SetStateAction } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import * as t from '../../style/payDrop.style';

type TList = {
  text: string;
};
type TProp = {
  delivery?: TList[];
  payment?: TList[];
  drop?: string;
  setDrop?: Dispatch<SetStateAction<string>>;
  onClick?: () => void;
};

export default function PayDrop({ delivery, payment, drop, setDrop }: TProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setDrop(target.value);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (delivery) setDrop('배송메세지를 선택해주세요.');
    if (payment) setDrop('입금계좌를 선택해주세요.');
  }, []);

  return (
    <t.Container>
      <t.Dropdown onClick={() => setIsOpen(!isOpen)}>
        <p>{drop}</p>
        {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </t.Dropdown>
      {isOpen && (
        <ul>
          {delivery &&
            delivery.map((item, index) => (
              <button key={index} value={item.text} onClick={handleClick}>
                {item.text}
              </button>
            ))}
          {payment &&
            payment.map((item, index) => (
              <button key={index} value={item.text} onClick={handleClick}>
                {item.text}
              </button>
            ))}
        </ul>
      )}
    </t.Container>
  );
}
