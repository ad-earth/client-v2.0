import * as t from '../../style/globalModal.style';
import ReactDom from 'react-dom';

interface PropsType {
  children: React.ReactNode;
}
interface ModalType extends PropsType {
  onClose: () => void;
}

export default function GlobalModal(props: ModalType) {
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

const ModalPortal = ({ children }: PropsType) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, el);
};
