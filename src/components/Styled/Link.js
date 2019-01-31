import styled from 'styled-components';

const Link = styled.a`
  cursor: pointer;

  @media (min-width: 501px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export default Link;
