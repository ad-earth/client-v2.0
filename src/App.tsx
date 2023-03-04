import React from 'react';

import { Toaster } from 'react-hot-toast';
import Loader from './components/common/Loader';

import { RouterProvider } from 'react-router-dom';
import Router from './shared/utils/Router';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './shared/utils/queryClient';

import { ThemeProvider } from 'styled-components';
import theme from './shared/style/theme';
import GlobalStyle from './shared/style/GlobalStyle';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Toaster />
          <Loader />
          <RouterProvider router={Router} />
          <ReactQueryDevtools />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
