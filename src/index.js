import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app'
import ErrorBoundry from './components/error-boundry';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundry><App /></ErrorBoundry>
  </React.StrictMode>
);
