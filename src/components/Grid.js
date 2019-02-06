import React, { useState } from 'react';
import styled from 'styled-components';

import Hexagon from './Hexagon';

const GridLayout = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 700px;
`;

const getTopPixels = (i) => {
  if (3 <= i && i <= 5) { return '50px' };
  if (6 <= i && i <= 9) { return '100px' };

  return '0px';
};

const backgrounds = ['#F4A460', '#0984e3', '#55efc4', '#e84393', '#2d3436', '#F4A460', '#2d3436', '#55efc4', '#F4A460'];

const Grid = ({ resources }) => {
  const [activeHexagon, setActiveHexagon] = useState();

  return (
    <GridLayout>
      {resources.map((entry, i) => {
        const type = resources[i].type;
        const background = resources[i].background;
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