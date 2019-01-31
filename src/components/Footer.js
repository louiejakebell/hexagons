import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
  font-size: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
`;

const Footer = () => {
  return <Note>@louiejakebell</Note>;
};

export default Footer;
