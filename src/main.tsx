import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18

import App from './App';
import Provider from './providers/Provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);
