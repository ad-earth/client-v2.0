import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 100%;
  position: relative;
  p {
    font-size: ${theme.fs13};
  }
`;

export const Option = styled.div`
  margin-top: 24px;
  color: ${theme.fc09};
  font-size: ${theme.fs12};
  font-weight: 600;
`;

export const DropDown = styled.div<{ isDrop: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 8px 12px;
  box-sizing: border-box;
  border: ${props =>
    props.isDrop ? `0.5px solid ${theme.ls14}` : `0.5px solid ${theme.ls08}`};
  color: ${theme.fc09};
  font-size: ${theme.fs14};
  cursor: pointer;
`;

export const IcToggleUp = styled(KeyboardArrowUpRoundedIcon)({
  '&.MuiSvgIcon-root': {
    color: `${theme.fc04}`,
  },
});

export const IcToggleDown = styled(KeyboardArrowDownRoundedIcon)({
  '&.MuiSvgIcon-root': {
    color: `${theme.fc04}`,
  },
});

export const DropMenuWrapper = styled.div`
  width: 100%;
  position: absolute;
`;

export const DropMenu = styled.div`
  width: 100%;
  z-index: 5px;
  padding: 8px 12px;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 0.5px solid ${theme.ls14};
  border-left: 0.5px solid ${theme.ls14};
  border-right: 0.5px solid ${theme.ls14};
  background: ${theme.bg01};
  color: ${theme.fc09};
  font-size: ${theme.fs14};
  cursor: pointer;
  :hover {
    background: ${theme.bg04};
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ColorIcon = styled.div<{ colorCode: string }>`
  width: 24px;
  height: 24px;
  background-color: ${props => props.colorCode};
  border: 1px solid ${theme.ls04};
  border-radius: 50%;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
`;

export const OptBox = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: ${theme.rgba01};
  font-size: ${theme.fs12};
  color: ${theme.fc09};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  span {
    color: ${theme.fc15};
  }
  > button {
    color: ${theme.fc09};
    background: none;
  }
  &.price {
    margin-top: 20px;
  }
`;

export const BtnWrapper = styled.div`
  width: 100px;
  height: 27px;
  border: 1px solid ${theme.ls07};
  background: ${theme.bg01};
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-right: 1px solid ${theme.ls07};
  color: ${theme.fc06};
  cursor: pointer;
  &.plus {
    border-right: none;
    border-left: 1px solid ${theme.ls07};
  }
`;

export const Qty = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fs12};
`;
