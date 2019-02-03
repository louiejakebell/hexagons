import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components';

import App from './components/App';
import reducer from './reducers/index';

import './text.css'

const store = createStore(reducer);

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 30px;
  text-align: center;
`;

render(
  <Wrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </Wrapper>,
  document.getElementById('app')
);
