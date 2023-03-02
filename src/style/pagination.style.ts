import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationRoot = styled(Pagination)({
  '&.MuiPagination-root': {
    ul: {
      marginTop: '20px',
    },
    button: {
      position: 'inherit',
    },
  },
});
