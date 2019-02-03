import React from 'react';
// import { HexGrid, Layout, Hexagon, Pattern, Path, Hex } from 'react-hexgrid';
import styled from 'styled-components';

const GridStyle = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: center;
  align-content: center;
  font-size: 10px;
  color: red;
`;

const HexagonText = styled.div`
  font-size: 10px;
  color: red;
`;

const Text = styled.div`
  position: absolute;
  font-size: 33px;
  left: ${props => props.left};
`;

const Hexagon = styled.div`
  width: 100px;
  height: 55px;
  background: red;
  position: relative;
  left: 50px;
  top: 50px;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid red;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid red;
  }
`;

const Hexagons = ({ resources }) => {

  return (
    <Hexagon onClick={() => console.log('sdfsdjfskdhjf')}>sdf</Hexagon>

    // <GridStyle>
    //   <div className="hexagon hex1"></div>
    //   <div onClick={() => {console.log('sdfdsf')}} class="hexagon hex2"></div>
    //   <div class="hexagon hex3"></div>
    //   <div class="hexagon hex4"></div>
    //   <div class="hexagon hex5"></div>
    //   <div class="hexagon hex6"></div>
    // </GridStyle>

    // <GridStyle>
    //   <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
    //     <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
    //       {resources.map((entry, i) => (
    //         <Hexagon key={i} q={i - 1} r={-1} s={i} />
    //       ))}
    //     </Layout>
    //   </HexGrid>

    //   {resources.map((entry, i) => (
    //     <Text left={`${i*300}px`} key={i}>{resources[i].type}</Text>
    //   ))}
    // </GridStyle>
  );
};

export default Hexagons;