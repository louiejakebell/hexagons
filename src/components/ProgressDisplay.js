import React from 'react';
// import Hexagon from 'react-hexagon';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import times from 'lodash/times';

import Message from './Styled/Message';

const ProgressDisplay = (resources) => {
  let hexagons = times(102, id => id);

  return (
    <div>
      <Message margin="50px" fontSize="23px">
        empty! save weight to start tracking progress
      </Message>

      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
          <Hexagon q={0} r={0} s={0} onClick={() => {alert('sdklfdsk')}}/>
          <Hexagon q={0} r={1} s={0} onClick={() => {alert('sdklfdsk')}}/>
          <Hexagon q={1} r={1} s={0} onClick={() => {alert('sdklfdsk')}}/>
          <Hexagon q={-1} r={0} s={1} onClick={() => {alert('sdklfdsk')}}/>
          <Hexagon q={0} r={-1} s={0} onClick={() => {alert('sdklfdsk')}}/>
        
          {/* <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> */}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default ProgressDisplay;
