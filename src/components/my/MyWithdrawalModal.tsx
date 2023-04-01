import Button from '../../elements/Button';
import useUser from '../../query/useUser';
import theme from '../../shared/style/theme';
import * as t from '../../style/myWithdrawalModal.style';

type TProps = {
  onClose: () => void;
};

export default function MyWithdrawalModal({ onClose }: TProps) {
  const { removeUser } = useUser();

  const handleLogout = () => {
    removeUser.mutate();
    onClose();
  };
  return (
    <t.Base>
      <t.Title>회원탈퇴</t.Title>
      <t.Description>
        가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은 삭제되지 않습니다.
        <br />
        탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은 복원되지
        않으며, 사용 및 다운로드했던 쿠폰도 사용 불가능합니다.
        <br />
        회원 탈퇴를 진행하시겠습니까?
      </t.Description>
      <t.ButtonBox>
        <Button
          bgColor={`${theme.bg01}`}
          hBgColor={`${theme.bg05}`}
          color={`${theme.fc09}`}
          hColor={`${theme.fc09}`}
          radius="30px"
          width="initial"
          padding="10px 25px"
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          radius="30px"
          width="initial"
          padding="10px 25px"
          onClick={handleLogout}
        >
          탈퇴하기
        </Button>
      </t.ButtonBox>
    </t.Base>
  );
}
