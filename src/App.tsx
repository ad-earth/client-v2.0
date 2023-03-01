import React from 'react';
import './App.css';
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
          <RouterProvider router={Router} />
          <ReactQueryDevtools />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
