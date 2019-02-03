import React, { useState } from 'react';

import Grid from './Grid';
import Hexagon from './Hexagon';

const Hexagons = ({ resources }) => {
  const [activeHexagon, setActiveHexagon] = useState();

  return (
    <Grid>
      {resources.map((entry, i) => {
        const background = resources[i].background;
        const type = resources[i].type;
        const active = type === activeHexagon;

        return (
          <Hexagon background={background} active={active} onClick={() => setActiveHexagon(type)} key={i}>
            {type}
          </Hexagon>
        );

      })}
    </Grid>
  );
};

export default Hexagons;