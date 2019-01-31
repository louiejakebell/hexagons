import styled from 'styled-components';

const Message = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  margin: ${props => props.margin};
  display: ${props => props.display};
  padding: 1em;
`;

export default Message;
