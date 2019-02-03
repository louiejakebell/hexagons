import React from 'react';

import Image from './Image';
import Rocket from '../images/rocket.png';

const Header = () => {
  return (
    <div>
      hexagons <Image src={Rocket} />
    </div>
  );
};

export default Header;
