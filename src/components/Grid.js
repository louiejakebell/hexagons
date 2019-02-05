import React, { useState } from 'react';

import GridLayout from './GridLayout';
import Hexagon from './Hexagon';

const getTopPixels = (i) => {
  const base = 100;

  if (i == 0 || i == 1) {
    return `${base}px`;
  }

  if (i == 2 || i == 3) {
    return `${base + 160}px`;
  }

  if (i == 4 || i == 5) {
    return `${base + 320}px`;
  }

  if (i == 6 || i == 7) {
    return `${base + 480}px`;
  }

  if (i == 8 || i == 9) {
    return `${base + 640}px`;
  }
};

const getLeftPixels = (i) => {
  const base = 50;
  
  if (i == 0 || i == 4 || i == 8) {
    return `${base}px`;
  }

  if (i == 1 || i == 5 || i == 9) {
    return `${base + 200}px`;
  }

  if (i == 2 || i == 6 || i == 10) {
    return `${base + 100}px`;
  }

  if (i == 3 || i == 7 || i == 11) {
    return `${base + 300}px`;
  }
}

const Grid = ({ resources }) => {
  const [activeHexagon, setActiveHexagon] = useState();

  return (
    <GridLayout>
      {resources.map((entry, i) => {
        const background = resources[i].background;
        const type = resources[i].type;
        const active = type === activeHexagon;

        return (
          <Hexagon
            background={background}
            active={active}
            onClick={() => setActiveHexagon(type)}
            key={i}
            number={i}
            left={getLeftPixels(i)}
            top={getTopPixels(i)}>
            {type}
          </Hexagon>
        );

      })}
    </GridLayout>
  );
};

export default Grid;