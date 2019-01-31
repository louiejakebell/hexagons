import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.background};
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.formFontSize};
  color: ${props => props.theme.foreground};
  margin: ${props => props.margin};
  border: 2px solid ${props => props.theme.buttonColor};
  padding: 0.25em 0.5em;
  text-decoration: none;
`;

export default Button;
