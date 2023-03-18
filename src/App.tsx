import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loader from './components/common/Loader';
import store from './redux/store';
import GlobalStyle from './shared/style/GlobalStyle';
import theme from './shared/style/theme';
import { queryClient } from './shared/utils/queryClient';
import Router from './shared/utils/Router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Toaster />
          <Loader />
          <Provider store={store}>
            <RouterProvider router={Router} />
          </Provider>
          <ReactQueryDevtools />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
