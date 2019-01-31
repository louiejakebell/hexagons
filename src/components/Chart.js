import React, { useState } from 'react';

import getDatePrefix from '../helpers/getDatePrefix';
import generateCoordinates from '../helpers/generateCoordinates';

const Chart = props => {
  const [crosshair, setCrosshair] = useState(false);

  let data = generateCoordinates(props.data, []);

  return (
    <div>
      sdffdsf
    </div>
  );
};

export default Chart;
