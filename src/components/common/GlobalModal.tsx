import ReactDom from 'react-dom';
import * as t from '../../style/globalModal.style';

type TProps = {
  children: React.ReactNode;
};
interface IModal extends TProps {
  onClose: () => void;
}

export default function GlobalModal(props: IModal) {
  return (
    <ModalPortal>
      <t.ModalContainer className="ModalContainer">
        <t.ContentBox className="ContentBox">{props.children}</t.ContentBox>
        <t.ModalBackdrop
          className="ModalBackdrop"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            props.onClose();
          }}
        ></t.ModalBackdrop>
      </t.ModalContainer>
    </ModalPortal>
  );
}

const ModalPortal = ({ children }: TProps) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, el);
};
