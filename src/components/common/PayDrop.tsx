import React, { useEffect, useState } from 'react';
import * as t from '../../style/payDrop.style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type TList = {
  text: string;
};
type TProp = {
  delivery?: TList[];
  payment?: TList[];
  onClick?: () => void;
};

export default function PayDrop({ delivery, payment }: TProp) {
  const [drop, setDrop] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (delivery) setDrop('배송메세지를 선택해주세요.');
    if (payment) setDrop('입금계좌를 선택해주세요.');
  }, []);
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setDrop(target.value);
    setIsOpen(false);
  };
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
