import styled from 'styled-components';

const Hexagon = styled.div`
  width: 200px;
  height: 110px;
  background: ${props => props.active ? `red` : props.background};
  position: relative;
  left: 50px;
  top: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  color: white;
  border: 1px solid white;

  &:hover {
    opacity: 0.5;
  }

  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 50px solid ${props => props.active ? `red` : props.background};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 50px solid ${props => props.active ? `red` : props.background};
  }
`;

export default Hexagon;