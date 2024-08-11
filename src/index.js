import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { BookstoreServiceContext } from './components/bookstore-service-context';

// Заглушка временная для демонстрации передачи через контекст
const a = {
  getBooks: () => [{id: 1, title: "Стальные пещеры", author:"Айзек Азимов"}]};

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceContext.Provider value={a}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceContext.Provider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
)
