import styled from 'styled-components';
import theme from '../shared/style/theme';
import Avatar from '@mui/material/Avatar';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
`;
export const Wrap = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: -30px -50px 0 0;
  border-radius: 50%;
  background-color: ${theme.bg09};
  input {
    display: none;
  }
`;
export const Content = styled.div``;
export const Profile = styled(Avatar)({
  '&.MuiAvatar-root': {
    width: 80,
    height: 80,
  },
});
export const Upload = styled(PhotoCameraOutlinedIcon)({
  '&.MuiSvgIcon-root': {
    width: 20,
    height: 20,
    color: `${theme.bg04}`,
    cursor: 'pointer',
  },
});
