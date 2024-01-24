import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root') as HTMLElement
);

reportWebVitals();
