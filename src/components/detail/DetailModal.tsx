import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { setOptions } from '../../redux/reducer/optionSlice';
import { setQty } from '../../redux/reducer/qtySlice';
import { useAppDispatch } from '../../redux/store';
import theme from '../../shared/style/theme';

type TProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function DetailModal({ open, setOpen }: TProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(setOptions([]));
    dispatch(setQty(0));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
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
