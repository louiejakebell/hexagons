import React, { useState } from 'react';

import GridLayout from './GridLayout';
import Hexagon from './Hexagon';

const getTopPixels = (i) => {
  if (3 <= i && i <= 5) { return '50px' };
  if (6 <= i && i <= 9) { return '100px' };

  return '0px';
}

const Grid = ({ resources }) => {
  const [activeHexagon, setActiveHexagon] = useState();

  return (
    <GridLayout>
      {resources.map((entry, i) => {
        const background = resources[i].background;
        const type = resources[i].type;
        const active = type === activeHexagon;
        const left = (i === 3 || i === 4 || i === 5 || i === 9) ? '100px' : '0px';

        return (
          <Hexagon
            background={background}
            active={active}
            onClick={() => setActiveHexagon(type)}
            key={i}
            left={left}
            top={getTopPixels(i)}>
            {type}
          </Hexagon>
        );

      })}
    </GridLayout>
  );
};

export default Grid;