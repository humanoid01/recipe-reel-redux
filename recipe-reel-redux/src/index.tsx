import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { GlobalStyles } from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);
let persistor = persistStore(store);

const globalStyles = () => ({
  body: {
    backgroundColor: '#f5f5f5',
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: 'black',
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <GlobalStyles styles={globalStyles} />
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
