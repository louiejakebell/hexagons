import styled from 'styled-components';

const Input = styled.input`
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.formFontSize};
  width: ${props => props.width};
  padding: 0.5em;
  margin: 0 0 0 0.5em;
  background: papayawhip;
  border: none;
  margin-top: 0.5em;
  text-align: center;
`;

export default Input;
