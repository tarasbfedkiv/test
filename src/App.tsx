import React from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Routes from './lib/router';
import reducer from './store/contact/reducer';

const queryClient = new QueryClient();

const store: Store<ContactState, ContactAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
