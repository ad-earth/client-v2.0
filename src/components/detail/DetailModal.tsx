import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../shared/style/theme';

type TProps = {
  open: boolean;
};

export default function DetailModal({ open }: TProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: `${theme.fc09}` }}
          >
            선택하신 상품을 장바구니에 담았습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ color: `${theme.fc09}`, fontWeight: 'bolder' }}
          >
            계속쇼핑
          </Button>
          <Button
            onClick={() => navigate('/cart')}
            style={{ color: `${theme.fc09}` }}
          >
            장바구니
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
