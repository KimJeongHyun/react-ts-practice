import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
