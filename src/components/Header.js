import React from 'react';
import styled from 'styled-components';

import Rocket from '../images/rocket.png';

const Image = styled.img`
  width: 30px;
  width: ${props => props.width};
`;

const Header = () => {
  return (
    <div>
      hexagons <Image src={Rocket} />
    </div>
  );
};

export default Header;
