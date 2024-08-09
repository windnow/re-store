import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app'
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceContext } from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceContext.Provider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceContext.Provider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
)
