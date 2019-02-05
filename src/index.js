import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import App from './components/App';

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 30px;
  text-align: center;
`;

render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('app')
);
