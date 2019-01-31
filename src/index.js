import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled, { ThemeProvider } from 'styled-components';

import App from './components/App';
import reducer from './reducers/index';
import { theme } from './constants';

const store = createStore(reducer);

const Wrapper = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  text-align: center;
`;

render(
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Provider store={store}>
        <App />
      </Provider>
    </Wrapper>
  </ThemeProvider>,
  document.getElementById('app')
);
