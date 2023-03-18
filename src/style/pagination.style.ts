import { Pagination } from '@mui/material';
import styled from 'styled-components';

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
